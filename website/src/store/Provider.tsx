import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PreviewThemeValue, previewThemes, ThemeValue, Context, markdownString } from './context';
import { useMdSource } from './getMdSource';

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramPreviewTheme = searchParams.get('theme') as PreviewThemeValue;
  const initPreviewTheme = paramPreviewTheme || 'underscore';
  const mdurl = searchParams.get('md');
  const [markdown, setMarkdown] = React.useState<string>(mdurl ? '' : markdownString);
  const [css, setCss] = React.useState<string>(previewThemes[initPreviewTheme].value);
  const [previewTheme, setPreviewTheme] = React.useState<PreviewThemeValue>(initPreviewTheme);
  const [theme, setTheme] = React.useState<ThemeValue>('default');
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const { data: mddata, isLoading: loading } = useMdSource(mdurl);
  useEffect(() => {
    if (paramPreviewTheme !== previewTheme) {
      searchParams.set('theme', previewTheme);
      setSearchParams(searchParams);
    }
  }, [paramPreviewTheme, previewTheme, searchParams, setSearchParams]);
  useEffect(() => {
    if (mdurl) {
      setMarkdown(mddata || '');
    }
  }, [mddata, mdurl]);
  useEffect(() => setIsLoading(loading), [loading]);
  return (
    <Context.Provider
      value={{
        isLoading,
        setIsLoading,
        markdown,
        setMarkdown,
        css,
        setCss,
        previewTheme,
        setPreviewTheme,
        theme,
        setTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};
