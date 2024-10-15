import { Outlet, useNavigation } from "react-router";
import { Header } from "./Header";

const AppLayout = () => {

      const navigation = useNavigation();
  
      console.log(navigation);
    
      if (navigation.state === "loading") return <Loading />;    

return (
<>
<Header/>
<Outlet/>
</>
);
};

export default AppLayout;