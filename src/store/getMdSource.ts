import { useQuery } from '@tanstack/react-query';

export const useMdSource = (url: string | null) => {
  return useQuery(['database-list', url], () => {
    if (!url) return Promise.resolve('');
    return fetch(url)
      .then((response) => response.text())
      .then((data) => {
        return data;
      });
  });
};
