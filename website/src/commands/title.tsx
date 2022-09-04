import React from 'react';
import { ICommand } from '@uiw/react-markdown-editor';
import styled from 'styled-components';
import { ReactComponent as ColorIcon } from '../assets/color.svg';

const Title = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  line-height: 1;
  padding-right: 0.5rem;
  padding-left: 0.2rem;
`;

export const themeTitle: ICommand = {
  name: 'themeTitle',
  keyCommand: 'themeTitle',
  button: () => (
    <Title>
      <ColorIcon width={16} height={16} />
      主题编辑器
    </Title>
  ),
};
