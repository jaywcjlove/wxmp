import { MarkdownPreviewProps } from '@uiw/react-markdown-preview';
import styled from 'styled-components';
import { useContext } from 'react';
import { Context, previewThemes } from '../../store/context';

import { markdownToHTML } from '../../utils/markdownToHTML';

const Warpper = styled.div`
  width: 375px;
  padding: 20px;
  box-shadow: 0 0 60px rgb(0 0 0 / 10%);
  min-height: 100%;
`;

export const Preview = (props: MarkdownPreviewProps) => {
  const { css } = useContext(Context);
  const html = markdownToHTML(props.source || '', previewThemes[css].value);
  return <Warpper dangerouslySetInnerHTML={{ __html: html }} />;
};
