import MarkdownEditor, { IMarkdownEditor } from '@uiw/react-markdown-editor';
import { useContext } from 'react';
import { EditorView } from '@codemirror/view';
import styled from 'styled-components';
import { css as cssLang } from '@codemirror/lang-css';
import { Preview } from './Preview';
import { copy } from '../../commands/copy';
import { previousCommand } from '../../commands/css';
import { themeTitle } from '../../commands/title';
import { theme as themeCommand, previeTheme } from '../../commands/theme';
import { Context, themes } from '../../store/context';

const Warpper = styled.div`
  height: calc(100vh - 2.9rem);
`;

export const EditorPage = () => {
  const commands = [themeTitle, themeCommand, previousCommand];
  const toolbarsMode: IMarkdownEditor['toolbarsMode'] = [previeTheme, copy, 'preview', 'fullscreen'];
  const { theme, css, setCss } = useContext(Context);
  const value = themes[theme].value;
  const handleChange = (value: string) => setCss(value);
  return (
    <Warpper>
      <MarkdownEditor
        value={css}
        theme={value}
        toolbars={commands}
        toolbarsMode={toolbarsMode}
        reExtensions={[EditorView.lineWrapping, cssLang()]}
        renderPreview={Preview}
        onChange={handleChange}
        visible={true}
        height="calc(100vh - 4.92rem)"
      />
    </Warpper>
  );
};
