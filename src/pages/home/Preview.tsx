import { MarkdownPreviewProps } from '@uiw/react-markdown-preview';
import styled from 'styled-components';
import def from '../../conf/default.md.css';

import { markdownToHTML } from '../../utils/markdownToHTML';

const Warpper = styled.div`
  width: 375px;
  padding: 20px;
  box-shadow: 0 0 60px rgb(0 0 0 / 10%);
  min-height: 100%;
`;

export const Preview = (props: MarkdownPreviewProps, visible: boolean) => {
  const html = markdownToHTML(props.source || '', def);
  return <Warpper dangerouslySetInnerHTML={{ __html: html }} />;
};
