import React, { useContext } from 'react';
import { ICommand, IMarkdownEditor, ToolBarProps } from '@uiw/react-markdown-editor';
import styled from 'styled-components';
import { Context, previewThemes, PreviewThemeValue, themes as editorThemes, ThemeValue } from '../store/context';

const Select = styled.select`
  max-width: 4rem;
  padding: 0;
  appearance: none;
  background-color: var(--color-border-muted);
  border: none;
  padding: 0 0.2rem 0 0.2rem;
  margin: 0;
  font-family: inherit;
  font-size: 0.8rem;
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
      {(Object.keys(editorThemes) as Array<ThemeValue>).map((name, key) => {
        return (
          <option key={key} value={name}>
            {editorThemes[name].label}
          </option>
        );
      })}
    </Select>
  );
};

export const theme: ICommand = {
  name: 'theme',
  keyCommand: 'theme',
  button: (command, props, opts) => <ThemeView command={command} editorProps={{ ...props, ...opts }} />,
};

const ThemePreviewView: React.FC<{}> = () => {
  const { setCss, previewTheme, setPreviewTheme } = useContext(Context);
  const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const value = ev.target.value as PreviewThemeValue;
    setPreviewTheme(value);
    setCss(previewThemes[value].value);
  };
  return (
    <Select value={previewTheme} onChange={handleChange}>
      {(Object.keys(previewThemes) as Array<PreviewThemeValue>).map((name, key) => {
        return (
          <option value={name} key={key}>
            {previewThemes[name].label}
          </option>
        );
      })}
    </Select>
  );
};

export const previeTheme: ICommand = {
  name: 'previewTtheme',
  keyCommand: 'previewTtheme',
  button: () => <ThemePreviewView />,
};
