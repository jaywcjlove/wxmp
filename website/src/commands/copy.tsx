import React from 'react';
import { ICommand, IMarkdownEditor, ToolBarProps } from '@uiw/react-markdown-editor';
import toast from 'react-hot-toast';
import styled from 'styled-components';

const Button = styled.button`
  /* white-space: nowrap;
  width: initial !important;
  display: flex;
  align-items: center; */
`;

const CopyView: React.FC<{ command: ICommand; editorProps: IMarkdownEditor & ToolBarProps }> = (props) => {
  const { editorProps } = props;
  const handleClick = () => {
    const dom: HTMLDivElement | null = editorProps.preview.current;
    if (!dom) {
      toast.error(<div>dom is null</div>);
      return;
    }
    dom.focus();
    const htmlContent = dom.innerHTML;
    navigator.clipboard
      .writeText(htmlContent)
      .then(() => {
        toast.success(<div>复制成功！去公众号编辑器粘贴吧！</div>);
      })
      .catch((err) => {
        toast.error(<div>{JSON.stringify(err)}</div>);
        console.error('Failed to copy: ', err);
      });
  };
  return (
    <Button type="button" onClick={handleClick}>
      {props.command.icon}
    </Button>
  );
};

export const copy: ICommand = {
  name: 'copy',
  keyCommand: 'copy',
  button: (command, props, opts) => <CopyView command={command} editorProps={{ ...props, ...opts }} />,
  icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" height="16" width="16">
      <path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
      <path d="M4 22h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2zm2-10h6v2H6v-2zm0 4h6v2H6v-2z" />
    </svg>
  ),
};
