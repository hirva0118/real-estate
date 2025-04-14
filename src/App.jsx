import {Route, Routes } from "react-router-dom"
import { routes } from "./routes/routeConfig"
import Layout from './Layout';

function App() {

  return (
    <Routes>
        {routes.map(({path , component:Component} , index) => (
          <Route 
            key={index}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        ))}
    </Routes>
  );
}

export default App
