import { VFile } from 'vfile';
import { unified } from 'unified';
import * as csstree from 'css-tree';
import { Element } from 'hast';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypePrism from 'rehype-prism-plus';
import rehypeRaw from 'rehype-raw';
import rehypeRewrite from 'rehype-rewrite';
import stringify from 'rehype-stringify';
import { cssdata, spaceEscape, footnotes, footnotesLabel } from './css';

export type MarkdownToHTMLOptions = {

}

export function markdownToHTML(md: string, css: string, options: MarkdownToHTMLOptions = {}) {
  const ast = csstree.parse(css, {  
    parseAtrulePrelude: false,
    parseRulePrelude: false,
    parseValue: false,
    parseCustomProperty: false,
    positions: false
  });
  // @ts-ignore
  const data = cssdata(ast.children.head);
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrism)
    .use(remarkGfm)
    .use(rehypeRaw)
    .use(rehypeRewrite, {
      rewrite: (node, index, parent) => {
        if (node?.type === 'element' && node?.tagName === 'code' && parent?.type === 'element' && parent?.tagName === 'pre') {
          spaceEscape(node)
        }
        if (node?.type === 'element' && node.tagName === 'section' && (node?.properties?.className as string[]).includes('footnotes')) {
          footnotes(node)
        }
        if (node?.type === 'element' && node.tagName === 'sup') {
          footnotesLabel(node)
        }
        if (node?.type === 'element' && node?.tagName === 'code' && parent?.type === 'element' && parent?.tagName !== 'pre') {
          if (!node.properties) node.properties = {}
          node.properties!.className = ['code-spans'];
        }
        if (node?.type === 'element') {
          if (node.tagName === 'input' && parent?.type === 'element') {
            if (parent && parent.type === 'element') {
              parent.children = parent?.children.filter(elm => (elm as Element).tagName !== 'input')
            }
            return;
          }
          if (!node.properties) {
            node.properties = {};
          }
          const className = (node.properties?.className as string[]);
          let style = '';
          if (className) {
            className.forEach((name) => {
              if (data[`.${name}`]) {
                style = data[`.${name}`];
              }
            })
          }
          if (!style) style = data[node.tagName];
          if (style) {
            node.properties.style = style;
          }
        }
      }
    })
    .use(stringify);
    const file = new VFile();
    file.value = md;
    const hastNode = processor.runSync(processor.parse(file), file);
    return String(processor.stringify(hastNode, file));
}
