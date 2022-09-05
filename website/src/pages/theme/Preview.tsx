import { MarkdownPreviewProps } from '@uiw/react-markdown-preview';
import { useContext } from 'react';
import { Context } from '../../store/context';

import { markdownToHTML } from '../../utils/markdownToHTML';
import { Warpper } from '../home/Preview';

export const Preview = (props: MarkdownPreviewProps) => {
  const { css, markdown } = useContext(Context);
  const html = markdownToHTML(markdown, css);
  return <Warpper contentEditable spellCheck={false} dangerouslySetInnerHTML={{ __html: html }} />;
};
