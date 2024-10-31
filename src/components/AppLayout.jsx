import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { createContext, useEffect, useState } from "react";

// Creating context
export const myContext = createContext(); 

const AppLayout = () => {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(true); 
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  useEffect(()=>{

    if(themeMode===true){
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    localStorage.setItem('themeMode','light');
    }
    else{
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    localStorage.setItem('themeMode','dark');
    }    
  },[themeMode]);

  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loading />;

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    themeMode,
    setThemeMode,
  };

  return (
    <myContext.Provider value={values}> 
      <>

        {!isHideSidebarAndHeader && <Header />}
        
        <div className="main d-flex">

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
