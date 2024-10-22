import { Outlet, useNavigation } from "react-router";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";
import { SideBar } from "./SideBar";
import { Users } from "./Users";


const AppLayout = () => {

      const navigation = useNavigation();
  
      console.log(navigation);
    
      if (navigation.state === "loading") return <Loading />;    

return (
<>
<Header/>

<div className="main d-flex">
      <div className="sidebarWrapper">
      <SideBar/>
      </div>

      <div className="content">
      <Dashboard />
      {/* <Outlet/> */}

      </div>

</div>
</>
);
};

export default AppLayout;