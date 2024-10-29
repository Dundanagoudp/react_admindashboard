import { Outlet, useNavigation } from "react-router";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";
import { SideBar } from "./SideBar";
import { createContext, useEffect, useState } from "react";

// Creating context
export const myContext = createContext();

const AppLayout = () => {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);

  const navigation = useNavigation();

  // If the app is in a loading state, show the loading component
  if (navigation.state === "loading") return <Loading />;

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
  };

  return (
    <>
      <myContext.Provider value={values}>
        <Header />
        <div className="main d-flex">
          <div className={`sidebarWrapper ${isToggleSidebar ? "toggle" : ""}`}>
            <SideBar />
          </div>
          <div className={`content ${isToggleSidebar ? "toggle" : ""}`}>
            <Dashboard />
            {/* Uncomment the Outlet component if you need nested routes */}
            {/* <Outlet /> */}
          </div>
        </div>
      </myContext.Provider>
    </>
  );
};

export default AppLayout;
