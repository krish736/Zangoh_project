import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componenets/Header";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <Outlet/>
    </div>
  );
}

export default App;
