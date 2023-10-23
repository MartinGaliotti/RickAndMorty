import pathName from "../../Helpers/PATHNAME.routes";
import { NavLink } from "react-router-dom";
import Styled from "./MainNav.module.css";

const MainNav = (props) => {
  return (
    <div className={Styled.container}>
      <NavLink className={Styled.home} to={pathName.HOME}>
        Home
      </NavLink>
      <NavLink className={Styled.favorite} to={pathName.FAVORITE}>
        Favorites
      </NavLink>
      <NavLink className={Styled.about} to={pathName.ABOUT}>
        About
      </NavLink>
      <NavLink className={Styled.button} onClick={props.logOut}>
        Log Out
      </NavLink>
    </div>
  );
};

export default MainNav;
