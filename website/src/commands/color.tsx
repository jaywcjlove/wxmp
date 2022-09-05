import React, { useContext } from 'react';
import { ICommand } from '@uiw/react-markdown-editor';
import styled from 'styled-components';
import { Context } from '../store/context';

const Input = styled.input`
  position: absolute;
  opacity: 0;
  height: 20px;
  width: 20px;
`;

const Button = styled.button``;

const ColorView: React.FC<{}> = (props) => {
  const { preColor, setPreColor } = useContext(Context);
  const handleChange = (evn: React.ChangeEvent<HTMLInputElement>) => {
    setPreColor(evn.target.value);
  };
  const color = preColor ? preColor : 'currentColor';
  return (
    <Button type="button">
      <svg viewBox="0 0 24 24" fill="none" height="16" width="16">
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.203 2.004c1.261 0 2.304 1.103 2.476 2.538l8.483 8.484-7.778 7.778a3 3 0 0 1-4.243 0L2.9 16.562a3 3 0 0 1 0-4.243l2.804-2.805V4.961c0-1.633 1.12-2.957 2.5-2.957Zm.5 2.957v1.553l-1 1V4.961c0-.327.224-.591.5-.591.277 0 .5.264.5.591Zm0 5.914V9.342l-4.39 4.391a1 1 0 0 0 0 1.414l4.243 4.243a1 1 0 0 0 1.414 0l6.364-6.364-5.63-5.63v3.48l-.003.128h-2.01a.698.698 0 0 0 .012-.129Z"
        />
        <path d="M16.859 16.875a3 3 0 1 0 4.242 0l-2.121-2.121-2.121 2.12Z" fill={color} />
      </svg>

      <Input type="color" value={preColor} onChange={handleChange} />
    </Button>
  );
};

export const colorCommand: ICommand = {
  name: 'color',
  keyCommand: 'color',
  button: () => <ColorView />,
};
