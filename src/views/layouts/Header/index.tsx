import React from "react";
import styled from "styled-components";
import s, { container, theme } from '@/styles';
import HeaderSearch, { ScHeaderSearch } from "./HeaderSearch";

const Header = () => {
  return (
    <ScHeader>
      <section>
        <HeaderSearch />
      </section>
    </ScHeader>
  );
};

const ScHeader = styled.header`
  ${s(`h(97); bgc(${theme.azure}); z(1000);`)}

  section { 
    ${container}; 
    ${s('rel')}

    .header-search {
      ${s('abs; arb(0,12);')}
    }
  }
`;

export default Header;
