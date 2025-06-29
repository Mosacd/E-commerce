import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";


function App() {



  return (
  
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="women" />
          <Route path="men" />
          <Route path="kids" />
        </Route>
      </Routes>
  );
}

export default App;
