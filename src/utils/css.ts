import { RootContent, Element, Text, Root } from 'hast';

export const getBlock = (data: any, str: string = '') => {
  if (data && data.data && data.data.type === 'Declaration') {
    str = `${data.data.property}: ${data.data.value.value}${data.data.important ? ' !important' : ''};`;
    if (data.next) {
      str += getBlock(data.next)
    }
  }
  return str;
}

export const cssdata = (list: any, result: Record<string, string> = {}) => {
  if (list.data && list.data.type === 'Rule') {
    result[list.data.prelude.value] = getBlock(list.data.block.children.head);
    if (list.next) {
      result = cssdata(list.next, {...result})
    }
  }
  return result;
}

export const spaceEscape = (node: RootContent) => {
  if (node.type === 'element' && node.children) {
    const className = (node.properties?.className as string[]);
    if (className) {
      if (!node.properties) {
        node.properties = {};
      }
      node.properties.className = className.filter((str: string) => !/(token|control-flow)/.test(str));
    }

    node.children.map(elm => {
      if (elm.type === 'element' && elm.children) {
        spaceEscape(elm)
      }
      if (elm.type === 'text') {
        elm.value = elm.value.replace(/\s/g, '\u00A0')
      }
      return elm
    })
  }
}

type ChildContent = Element | Text;
const getNodeText = (node: ChildContent[]) => {
  let str = '';
  node.forEach((item) => {
    if (item.type === 'text') str += item.value;
    else if (item.type === 'element') {
      str += getNodeText(item.children as ChildContent[]);
    }
  })
  return str.replace(/↩/, '');
}

export const footnotes = (node: Element) => {
  node.children.map((item) => {
    if (item.type === 'element' && item.tagName === 'h2') {
      if (!item.properties) item.properties = {};
      item.properties.className = ['footnotes-title'];
      item.children = [{
        type: 'text',
        value: '参考'
      }];
    }
    if (item.type === 'element' && item.tagName === 'ol') {
      item.children.map((li) => {
        if (li.type === 'element' && li.tagName === 'li') {
          if (!li.properties) li.properties = {};
          li.properties.className = ['footnotes-list'];
          li.children = [{
            type: 'text',
            value: getNodeText(li.children as ChildContent[])
          }]
        }
        return li;
      })
    }
    return item;
  })
}

export const footnotesLabel = (node: Element) => {
  const label = getNodeText(node.children as ChildContent[]);
  node.children = [{
    type: 'text',
    value: `[${label}]`
  }];
}

export const imagesStyle = (node: Element, parent: Root | Element | null) => {
  if (parent?.type === 'element' && parent.tagName === 'p' && node?.type === 'element' && node.tagName === 'img') {
    parent.tagName = 'figure';
    if (!parent.properties) parent.properties = {}
    parent.properties.className = ['image-warpper']
    if (!node.properties) node.properties = {}
    node.properties.className = ['image']
  }
}