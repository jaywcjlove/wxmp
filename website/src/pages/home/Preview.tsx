import { MarkdownPreviewProps } from '@uiw/react-markdown-preview';
import styled from 'styled-components';
import { useContext } from 'react';
import { Context } from '../../store/context';

import { markdownToHTML } from '../../utils/markdownToHTML';

export const Warpper = styled.div`
  width: 375px;
  padding: 20px;
  box-shadow: 0 0 60px rgb(0 0 0 / 10%);
  min-height: 100%;
  font-size: 17px;
`;

export const Preview = (props: MarkdownPreviewProps) => {
  const { css } = useContext(Context);
  const html = markdownToHTML(props.source || '', css);
  return <Warpper contentEditable spellCheck={false} dangerouslySetInnerHTML={{ __html: html }} />;
};
