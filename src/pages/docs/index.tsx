import MarkdownEditor from '@uiw/react-markdown-editor';
import styled from 'styled-components';
import data from '../../../README.md';

const Warpper = styled.div`
  max-width: 59rem;
  margin: 0 auto 0 auto;
  padding: 0 1rem 3rem 1rem;
`;

export const DocsPage = () => {
  return (
    <Warpper>
      <MarkdownEditor.Markdown source={data.source} />
    </Warpper>
  );
};
