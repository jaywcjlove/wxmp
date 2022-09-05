import React from 'react';
import { defaultTheme } from '@uiw/react-markdown-editor';
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
import defStyle from '../themes/default.md.css';
import simpleStyle from '../themes/simple.md.css';
import underscoreStyle from '../themes/underscore.md.css';
import baseStyle from '../themes/base.md.css';

import data from '../../../README.md';

export const markdownString = data.source;

export const themes = {
  default: {
    label: '默认主题',
    value: defaultTheme,
  },
  abcdef: {
    label: 'Abcdef Theme',
    value: abcdef,
  },
  androidstudio: {
    label: 'Android Studio Theme',
    value: androidstudio,
  },
  atomone: {
    label: 'Atomone Theme',
    value: atomone,
  },
  bbedit: {
    label: 'Bbedit Theme',
    value: bbedit,
  },
  bespin: {
    label: 'Bespin Theme',
    value: bespin,
  },
  darcula: {
    label: 'Darcula Theme',
    value: darcula,
  },
  dracula: {
    label: 'Dracula Theme',
    value: dracula,
  },
  duotoneLight: {
    label: 'Duotone Light Theme',
    value: duotoneLight,
  },
  duotoneDark: {
    label: 'Duotone Dark Theme',
    value: duotoneDark,
  },
  eclipse: {
    label: 'Eclipse Theme',
    value: eclipse,
  },
  githubLight: {
    label: 'Github Light Theme',
    value: githubLight,
  },
  githubDark: {
    label: 'Github Dark Theme',
    value: githubDark,
  },
  okaidia: {
    label: 'Okaidia Theme',
    value: okaidia,
  },
  sublime: {
    label: 'Sublime Theme',
    value: sublime,
  },
  xcodeLight: {
    label: 'Xcode Light Theme',
    value: xcodeLight,
  },
  xcodeDark: {
    label: 'Xcode Dark Theme',
    value: xcodeDark,
  },
};

export const previewThemes = {
  default: {
    label: '翡翠绿',
    value: defStyle,
    color: '#009874',
  },
  simple: {
    label: '简洁蓝',
    value: simpleStyle,
    color: '#0f4c81',
  },
  underscore: {
    label: '下划线黄',
    value: underscoreStyle,
    color: '#ffb11b',
  },
  base: {
    label: '简洁',
    value: baseStyle,
    color: '',
  },
};

/** 用于全局主题替换样式 */
export const replaceData: Record<PreviewThemeValue, ReplaceData[]> = {
  underscore: [
    { select: 'a', name: 'color', value: '{{color}}' },
    { select: 'h1', name: 'box-shadow', value: 'inset 0 -0.9rem 0 0 {{color}}' },
    { select: 'h2', name: 'box-shadow', value: 'inset 0 -0.7rem 0 0 {{color}}' },
    { select: 'h3', name: 'border-left', value: '5px solid {{color}}' },
  ],
  default: [
    { select: 'a', name: 'color', value: '{{color}}' },
    { select: 'h1', name: 'border-bottom', value: '3px solid {{color}}' },
    { select: 'h2', name: 'background', value: '{{color}}' },
    { select: 'h3', name: 'border-left', value: '5px solid {{color}}' },
  ],
  simple: [
    { select: 'a', name: 'color', value: '{{color}}' },
    { select: 'h1', name: 'border-bottom', value: '3px solid {{color}}' },
    { select: 'h2', name: 'background', value: '{{color}}' },
    { select: 'h3', name: 'border-left', value: '5px solid {{color}}' },
    { select: '.code-spans', name: 'color', value: '{{color}}' },
  ],
  base: [],
};

export type ReplaceData = {
  select: string;
  name: string;
  value: string;
};

export const colors = (Object.keys(previewThemes) as Array<keyof typeof previewThemes>).map(
  (key) => previewThemes[key].color,
);
export type ThemeValue = keyof typeof themes;
export type PreviewThemeValue = keyof typeof previewThemes;

export interface CreateContext {
  preColor: string;
  setPreColor: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
  css: string;
  setCss: React.Dispatch<React.SetStateAction<string>>;
  previewTheme: PreviewThemeValue;
  setPreviewTheme: React.Dispatch<React.SetStateAction<PreviewThemeValue>>;
  theme: ThemeValue;
  setTheme: React.Dispatch<React.SetStateAction<ThemeValue>>;
}

export const Context = React.createContext<CreateContext>({
  preColor: '',
  setPreColor: () => {},
  isLoading: true,
  setIsLoading: () => {},
  markdown: data.source,
  setMarkdown: () => {},
  css: previewThemes['underscore'].value,
  setCss: () => {},
  previewTheme: 'underscore',
  setPreviewTheme: () => {},
  theme: 'default',
  setTheme: () => {},
});
