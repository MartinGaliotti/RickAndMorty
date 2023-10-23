import React from "react";
import pathName from "../../Helpers/PATHNAME.routes";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Styled from "./Nav.module.css";
import MainNav from "../MainNav/MainNav";

export default function Nav(props) {
  const searchBarRender = () => {
    const actual = useLocation().pathname;
    if (actual === pathName.HOME) {
      return <SearchBar onSearch={props.onSearch} />;
    }
  };

  return (
    <div className={Styled.nav}>
      {searchBarRender()}
      <MainNav logOut={props.logOut} />
    </div>
  );
}
