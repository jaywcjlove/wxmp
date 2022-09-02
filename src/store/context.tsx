import React from "react";
import { abcdef } from '@uiw/codemirror-theme-abcdef';
import { androidstudio } from '@uiw/codemirror-theme-androidstudio';
import { atomone } from '@uiw/codemirror-theme-atomone';
import { bbedit } from '@uiw/codemirror-theme-bbedit';
import { bespin } from '@uiw/codemirror-theme-bespin';
import { darcula } from '@uiw/codemirror-theme-darcula';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { duotoneLight, duotoneDark } from '@uiw/codemirror-theme-duotone';
import { eclipse } from '@uiw/codemirror-theme-eclipse';
import { githubLight, githubDark } from '@uiw/codemirror-theme-github';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { sublime } from '@uiw/codemirror-theme-sublime';
import { xcodeLight, xcodeDark } from '@uiw/codemirror-theme-xcode';

export const themes = {
  abcdef, androidstudio, atomone, bbedit, bespin, darcula, dracula, duotoneLight, duotoneDark, eclipse,
  githubLight, githubDark, okaidia, sublime, xcodeLight, xcodeDark
}

export type ThemeValue = keyof typeof themes;

export interface CreateContext {
  css: string;
  setCss: React.Dispatch<React.SetStateAction<string>>;
  theme: ThemeValue;
  setTheme: React.Dispatch<React.SetStateAction<ThemeValue>>;
}

export const Context = React.createContext<CreateContext>({
  css: "",
  setCss: () => {},
  theme: 'githubLight',
  setTheme: () => {},
});

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [css, setCss] = React.useState("");
  const [theme, setTheme] = React.useState<ThemeValue>("githubLight");

  return (
    <Context.Provider
      value={{
        css, setCss,
        theme, setTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};