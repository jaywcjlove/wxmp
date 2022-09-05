import { useContext } from 'react';
import { Context } from '../../store/context';

import { markdownToHTML } from '../../utils/markdownToHTML';
import { Warpper } from '../home/Preview';

export const Preview = () => {
  const { css, markdown, preColor, previewTheme } = useContext(Context);
  const html = markdownToHTML(markdown, css, { preColor, previewTheme });
  return <Warpper contentEditable spellCheck={false} dangerouslySetInnerHTML={{ __html: html }} />;
};
