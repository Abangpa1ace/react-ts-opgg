import styled from "styled-components";
import { container } from "@/styles";
import { useRoutes } from "react-router-dom";
import s from '@/styles'
import RouterTitle from "react-router-title";
import HomePage from "@/views/pages/HomePage";
import ErrorPage from "@/views/pages/ErrorPage";
import pages from "./pages";

const routes = [
  {
    path: "/",
    title: "OP.GG 클론",
    element: <HomePage />,
  },
  ...pages,
  {
    path: '/error',
    title: 'Error Occured',
    element: <ErrorPage />
  }
];

const Router = () => {
  let router = useRoutes(routes);

  return (
    <ScRouter className="router">
      <RouterTitle pageTitle='OP.GG 클론' routesConfig={routes} />
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
