import MarkdownEditor, { getCommands } from '@uiw/react-markdown-editor';
import { useContext } from 'react';
import { EditorView } from '@codemirror/view';
import styled from 'styled-components';
import { Preview } from './Preview';
import { copy } from '../../commands/copy';
import { theme as themeCommand, previeTheme } from '../../commands/theme';
import { cssCommand } from '../../commands/css';
import { Context, themes } from '../../store/context';

export const Warpper = styled.div`
  height: calc(100vh - 2.9rem);
`;

export const HomePage = () => {
  const commands = [...getCommands(), themeCommand];
  const { theme, markdown, isLoading, setMarkdown } = useContext(Context);
  const themeValue = themes[theme].value;
  const handleChange = (value: string) => setMarkdown(value);
  return (
    <Warpper>
      <MarkdownEditor
        value={markdown}
        toolbars={commands}
        theme={themeValue}
        readOnly={isLoading}
        toolbarsMode={[cssCommand, previeTheme, copy, 'fullscreen', 'preview']}
        extensions={[EditorView.lineWrapping]}
        renderPreview={Preview}
        onChange={handleChange}
        visible={true}
        height="calc(100vh - 4.70rem)"
      />
    </Warpper>
  );
};
