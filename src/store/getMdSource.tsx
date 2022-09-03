import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import styled from 'styled-components';

const Warpper = styled.div`
  font-size: 0.8rem;
`;

export const useMdSource = (url: string | null) => {
  return useQuery(['database-list', url], () => {
    if (!url) return Promise.resolve('');
    return fetch(url)
      .then((response) => response.text())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        toast.error(
          <Warpper>
            加载失败！<a href={url}>请检查你的URL</a>
          </Warpper>,
        );
      });
  });
};
