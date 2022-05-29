import Header from "@/views/layouts/Header";
import Router from "@/router";
import useReactRouter from '@/hooks/useReactRouter';

const App = () => {
  const { pathname } = useReactRouter()
  const hideHeader = ['/error'].includes(pathname as string);

  return (
    <div id="app">
      {!hideHeader && <Header />}
      <Router />
    </div>
  );
};

export default App;
