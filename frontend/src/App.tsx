import Layout from "./components/layout/Layout";
import { routes } from "./config";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthContextProvider from "./lib/context/AuthContextProvider";
function App() {
  const router = createBrowserRouter(routes);
  return (
    <>
      <AuthContextProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </AuthContextProvider>
    </>
  );
}

export default App;
