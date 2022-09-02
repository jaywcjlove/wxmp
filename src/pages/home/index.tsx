import MarkdownEditor, { getCommands } from '@uiw/react-markdown-editor';
import { useContext } from 'react';
import { EditorView } from '@codemirror/view';
import styled from 'styled-components';
import { Preview } from './Preview';
import { copy } from './copy';
import { theme as themeCommand, previeTheme } from './theme';
import { Context, themes } from '../../store/context';
import data from '../../../README.md';

const Warpper = styled.div`
  height: calc(100vh - 2.9rem);
`;

export const HomePage = () => {
  const commands = [...getCommands(), themeCommand];
  const { theme } = useContext(Context);
  const value = themes[theme].value;
  return (
    <Warpper>
      <MarkdownEditor
        value={data.source}
        toolbars={commands}
        theme={value}
        toolbarsMode={[previeTheme, copy, 'preview', 'fullscreen']}
        extensions={[EditorView.lineWrapping]}
        renderPreview={Preview}
        visible={true}
        height="calc(100vh - 4.92rem)"
      />
    </Warpper>
  );
};
