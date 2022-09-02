import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import '@wcj/dark-mode';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';

const Warpper = styled.div`
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border-muted);
  padding: 0.5rem 1rem 0.5rem 1rem;
`;

const Article = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
`;

const Logo = styled(LogoIcon)`
  max-width: 3.6rem;
`;

const Title = styled.h1`
  font-size: 1.0rem;
  margin: 0;
  display: flex;
  align-items: center;
  user-select: none;
  sup {
    color: var(--color-fg-subtle);
    margin-left: 0.4rem;
    background-color: var(--color-border-muted);
    border-radius: 0.1rem;
    padding: 0 0.2rem;
    font-weight: normal;
    font-size: 0.1rem;
    letter-spacing: -0.1rem;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  dark-mode {
    font-size: 1.2rem;
  }
  a svg {
    display: block;
  }
`;

export function Layout() {
  return (
    <Warpper className="wmde-markdown-color">
      <Header>
        <Article>
          <Logo width={28} height={28} />
          <Title>
            微信公众号排版编辑器
            <sup> v{VERSION} </sup>
          </Title>
        </Article>
        <Section>
          <dark-mode permanent dark="Dark" light="Light" />
          <a href="https://github.com/jaywcjlove/wxmp" target="__blank">
            <GithubIcon width={23} height={23} />
          </a>
        </Section>
      </Header>
      <Outlet />
    </Warpper>
  );
}