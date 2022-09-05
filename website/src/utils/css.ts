import { RootContent, Element, Text, Root } from 'hast';
import { PreviewThemeValue, replaceData, ReplaceData } from '../store/context';

/**
 * {
 *    "replace": [
 *       { select: 'a', name: 'color', value: 'red' },
 *       { select: 'h1', name: 'box-shadow', value: 'red' },
 *       { select: 'h2', name: 'box-shadow', value: 'red' },
 *       { select: 'h3', name: 'border-left', value: 'red' },
 *       { select: 'h3', name: 'color', value: 'red' },
 *    ]
 * }
 */
type BlockOption = {
  replace?: Array<ReplaceData>;
};

export const getBlock = (data: any, str: string = '', opts: BlockOption = {}) => {
  const { replace } = opts;
  if (data && data.data && data.data.type === 'Declaration') {
    const value = replace?.find((m) => m.name === data.data.property)?.value || data.data.value.value;
    // console.log(value)
    str = `${data.data.property}: ${value}${data.data.important ? ' !important' : ''};`;
    if (data.next) {
      str += getBlock(data.next, '', opts);
    }
  }
  return str;
};

type Cssdata = {
  theme?: PreviewThemeValue;
  color?: string;
};

export const cssdata = (list: any, result: Record<string, string> = {}, opts: Cssdata = {}) => {
  if (list.data && list.data.type === 'Rule') {
    const selector = list.data.prelude.value;
    const options: BlockOption = {};
    // console.log('opts:', opts)
    if (opts.color && opts.theme && replaceData[opts.theme]) {
      options.replace = replaceData[opts.theme]
        .filter((m) => m.select === selector)
        .map((m) => ({
          ...m,
          value: m.value.replace('{{color}}', opts.color!),
        }));
    }
    result[selector] = getBlock(list.data.block.children.head, '', options);
    if (list.next) {
      result = cssdata(list.next, { ...result }, opts);
    }
  }
  return result;
};

export const spaceEscape = (node: RootContent) => {
  if (node.type === 'element' && node.children) {
    const className = node.properties?.className as string[];
    if (className) {
      if (!node.properties) {
        node.properties = {};
      }
      node.properties.className = className.filter((str: string) => !/(token|control-flow)/.test(str));
    }
    node.children.map((elm) => {
      if (elm.type === 'element' && elm.children) {
        spaceEscape(elm);
      }
      if (elm.type === 'text') {
        elm.value = elm.value.replace(/\s/g, '\u00A0');
      }
      return elm;
    });
  }
};

type ChildContent = Element | Text;
const getNodeText = (node: ChildContent[]) => {
  let str = '';
  node.forEach((item) => {
    if (item.type === 'text') str += item.value;
    else if (item.type === 'element') {
      str += getNodeText(item.children as ChildContent[]);
    }
  });
  return str.replace(/↩/, '');
};

export const footnotes = (node: Element) => {
  node.children.map((item) => {
    if (item.type === 'element' && item.tagName === 'h2') {
      if (!item.properties) item.properties = {};
      item.properties.className = ['footnotes-title'];
      item.children = [
        {
          type: 'text',
          value: '参考',
        },
      ];
    }
    if (item.type === 'element' && item.tagName === 'ol') {
      item.children.map((li) => {
        if (li.type === 'element' && li.tagName === 'li') {
          if (!li.properties) li.properties = {};
          li.properties.className = ['footnotes-list'];
          li.children = [
            {
              type: 'text',
              value: getNodeText(li.children as ChildContent[]),
            },
          ];
        }
        return li;
      });
    }
    return item;
  });
};

export const footnotesLabel = (node: Element) => {
  const label = getNodeText(node.children as ChildContent[]);
  node.children = [
    {
      type: 'text',
      value: `[${label}]`,
    },
  ];
};

export const imagesStyle = (node: Element, parent: Root | Element | null) => {
  if (
    parent?.type === 'element' &&
    /(p|a)/.test(parent.tagName) &&
    node?.type === 'element' &&
    node.tagName === 'img'
  ) {
    if (parent.tagName === 'p') {
      parent.tagName = 'figure';
    }
    if (!parent.properties) parent.properties = {};
    parent.properties.className = ['image-warpper'];
    if (!node.properties) node.properties = {};
    node.properties.className = ['image'];
  }
};
