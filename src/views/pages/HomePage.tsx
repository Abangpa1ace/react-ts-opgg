import React from "react";
import styled from "styled-components";
import useReactRouter from "@/hooks/useReactRouter";
import s, { theme } from '@/styles';

const HomePage: React.FC = () => {
  const { navigate } = useReactRouter();

  return (
    <ScHomePage>
      <section className="container">
        <img src='/asset/img/main-banner.png' alt='main-banner' />
        <h3>우측 상단 검색창에 소환사명을 검색해주세요!</h3>
      </section>
    </ScHomePage>
  );
};

const ScHomePage = styled.div`
  .container { ${s('flex-center; flex-column;')};
    min-height: calc(100vh - 97px);

    img ${s('w(460);')}

    h3 ${s(`mt(60); c(${theme.darkGrey}); fs(24);`)}
  }
`;

export default HomePage;
