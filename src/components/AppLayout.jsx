import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { createContext, useState } from "react";

// Creating context
export const myContext = createContext(); 

const AppLayout = () => {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false); 
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);

  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loading />;

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
  };

  return (
    <myContext.Provider value={values}> 
      <>
        {/* Render Header only if not hiding */}
        {!isHideSidebarAndHeader && <Header />}
        
        <div className="main d-flex">
          {/* Render Sidebar only if not hiding */}
          {!isHideSidebarAndHeader && (
            <div className={`sidebarWrapper ${isToggleSidebar ? "toggle" : ""}`}>
              <SideBar />
            </div>
          )}
          
          <div className={`content ${isHideSidebarAndHeader ? 'full' : ''} ${isToggleSidebar ? "toggle" : ""}`}>
            <Outlet /> 
          </div>
        </div>
      </>
    </myContext.Provider>
  );
};

export default AppLayout;
