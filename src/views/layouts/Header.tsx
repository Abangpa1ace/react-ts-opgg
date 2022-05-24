import React from "react";
import styled from "styled-components";
import s, { container, theme } from '@/styles';

const Header = () => {
  return (
    <ScHeader>
      <section className="container">hi</section>
    </ScHeader>
  );
};

const ScHeader = styled.header`
  ${s(`h(97); bgc(${theme.azure});`)}

  section { 
    ${container}; 
  }
`;

export default Header;
