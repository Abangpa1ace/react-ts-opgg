import styled from "styled-components";
import { container } from "@/styles";
import { useRoutes } from "react-router-dom";
import RouterTitle from "react-router-title";
import HomePage from "@/views/pages/HomePage";
import pages from "./pages";
import s from '@/styles'

const routes = [
  {
    path: "/",
    title: "OP.GG 클론",
    element: <HomePage />,
  },
  ...pages,
];

const Router = () => {
  let router = useRoutes(routes);

  return (
    <ScRouter className="router">
      <RouterTitle routesConfig={routes} />
      {router}
    </ScRouter>
  );
};

export const ScRouter = styled.div` 
  ${s('bgc(#eaeaea);')}
  min-height: calc(100vh - 97px);
 
  section.container { ${container}; }
`;

export default Router;
