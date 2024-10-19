import { Outlet } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { Sidebar } from "./components/sidebar/Sidebar";
import "./App.css";
function App() {
  const routes = [
    {
      id: "all",
      path: "/all",
      label: "All Characters",
    },
    {
      id: "dead",
      path: "/dead",
      label: "Dead",
    },
    {
      id: "locations",
      path: "/locations",
      label: "Locations",
    },
  ];
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="wrapper">
        <Sidebar>
          <Navigation items={routes} />
        </Sidebar>
        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
