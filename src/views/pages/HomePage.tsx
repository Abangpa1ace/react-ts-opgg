import React from "react";
import styled from "styled-components";
import useReactRouter from "@/hooks/useReactRouter";

const HomePage: React.FC = () => {
  const { navigate } = useReactRouter();

  return (
    <ScHomePage>
      <section></section>
    </ScHomePage>
  );
};

const ScHomePage = styled.div``;

export default HomePage;
