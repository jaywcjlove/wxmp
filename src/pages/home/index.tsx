import MarkdownEditor, { getCommands } from '@uiw/react-markdown-editor';
import { EditorView } from "@codemirror/view";
import styled from 'styled-components';
import data from '../../../README.md';
import { Preview } from './Preview';
import { copy } from './copy'

const Warpper = styled.div`
  height: calc(100vh - 2.9rem);
`;

export const HomePage = () => {
  const commands = getCommands();
  return (
    <Warpper>
      <MarkdownEditor
        value={data.source}
        toolbars={commands}
        toolbarsMode={[copy, 'preview', 'fullscreen']}
        extensions={[EditorView.lineWrapping]}
        renderPreview={Preview}
        visible={true}
        height="calc(100vh - 5.0rem)"
      />
    </Warpper>
  );
}