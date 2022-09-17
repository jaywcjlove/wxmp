import { NavLink } from 'react-router-dom';
import { ICommand } from '@uiw/react-markdown-editor';
import styled from 'styled-components';

const Link = styled(NavLink)`
  font-size: 0.8rem;
  line-height: 0.7rem;
  text-decoration: none;
  padding: 0.18rem 0.3rem;
  &:hover {
    color: var(--color-accent-fg);
    background-color: var(--color-neutral-muted);
    border-radius: 0.2rem;
  }
`;

export const cssCommand: ICommand = {
  name: 'previewTtheme',
  keyCommand: 'previewTtheme',
  button: () => <Link to="/editor/theme">编辑主题</Link>,
};

export const previousCommand: ICommand = {
  name: 'previous',
  keyCommand: 'previous',
  button: () => <Link to="/">返回</Link>,
};
