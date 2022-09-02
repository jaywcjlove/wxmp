import MarkdownEditor, { getCommands } from '@uiw/react-markdown-editor';
import { useContext } from 'react';
import { EditorView } from "@codemirror/view";
import styled from 'styled-components';
import { Preview } from './Preview';
import { copy } from './copy';
import { theme as themeCommand } from './theme';
import { Context, themes } from '../../store/context';
import data from '../../../README.md';

const Warpper = styled.div`
  height: calc(100vh - 2.8rem);
`;

export const HomePage = () => {
  const commands = [...getCommands(), themeCommand];
  const { theme } = useContext(Context);
  return (
    <Warpper>
      <MarkdownEditor
        value={data.source}
        toolbars={commands}
        theme={themes[theme]}
        toolbarsMode={[copy, 'preview', 'fullscreen']}
        extensions={[EditorView.lineWrapping]}
        renderPreview={Preview}
        visible={true}
        height="calc(100vh - 4.9rem)"
      />
    </Warpper>
  );
}