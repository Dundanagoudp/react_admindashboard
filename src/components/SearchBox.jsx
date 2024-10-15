import { IoSearchOutline } from "react-icons/io5";

export const SearchBox=()=>{
      return (
            <div className="searchBox posotion-relative d-flex align-items-center">
                  <IoSearchOutline className="mr-2 "/>
                  <input type="text" placeholder="search here" />
            </div>
      );
};