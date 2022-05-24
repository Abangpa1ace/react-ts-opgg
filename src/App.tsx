import Header from "@/views/layouts/Header";
import Router, { ScRouter } from "@/router";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Router />
    </div>
  );
};

export default App;
