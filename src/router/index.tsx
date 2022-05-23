import styled from "styled-components";
import { container } from "@/styles";
import { useRoutes } from "react-router-dom";
import RouterTitle from "react-router-title";
import HomePage from "@/views/pages/HomePage";
import pages from "./pages";

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

const ScRouter = styled.div`
  > div > section {
    ${container}
  }
`;

export default Router;
