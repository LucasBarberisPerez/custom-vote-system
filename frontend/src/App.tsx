import Layout from "./components/layout/Layout";
import { routes } from "./config";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  //TODO: add router
  const router = createBrowserRouter(routes);
  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
}

export default App;
