import React, { useContext } from 'react';
import { ICommand, IMarkdownEditor, ToolBarProps } from '@uiw/react-markdown-editor';
import styled from 'styled-components';
import { Context } from '../../store/context';

const Select = styled.select`
  max-width: 4rem;
  padding: 0;
  appearance: none;
  background-color: var(--color-border-muted);
  border: none;
  padding: 0 0.2rem 0 0.2rem;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: 0.3rem;
  outline: none;
  height: 1.15rem;
  cursor: inherit;
  line-height: inherit;
  border-radius: 0.2rem;
  &::-ms-expand {
    display: none;
  }
`;

const ThemeView: React.FC<{ command: ICommand; editorProps: IMarkdownEditor & ToolBarProps }> = (props) => {
  const { theme, setTheme } = useContext(Context);
  const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => setTheme(ev.target.value as any);
  return (
    <Select value={theme} onChange={handleChange}>
      <option value="abcdef">Abcdef Theme</option>
      <option value="androidstudio">Android Studio Theme</option>
      <option value="atomone">Atomone Theme</option>
      <option value="bbedit">Bbedit Theme</option>
      <option value="bespin">Bespin Theme</option>
      <option value="darcula">Darcula Theme</option>
      <option value="dracula">Dracula Theme</option>
      <option value="duotoneLight">Duotone Light Theme</option>
      <option value="duotoneDark">Duotone Dark Theme</option>
      <option value="eclipse">Eclipse Theme</option>
      <option value="githubLight">Github Light Theme</option>
      <option value="githubDark">Github Dark Theme</option>
      <option value="okaidia">Okaidia Theme</option>
      <option value="sublime">Sublime Theme</option>
      <option value="xcodeLight">Xcode Light Theme</option>
      <option value="xcodeDark">Xcode Dark Theme</option>
    </Select>
  );
};

export const theme: ICommand = {
  name: 'theme',
  keyCommand: 'theme',
  button: (command, props, opts) => <ThemeView command={command} editorProps={{ ...props, ...opts }} />,
  icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" height="16" width="16">
      <path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
      <path d="M4 22h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2zm2-10h6v2H6v-2zm0 4h6v2H6v-2z" />
    </svg>
  ),
};
