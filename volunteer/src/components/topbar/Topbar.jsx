import React from "react";
import "./topbar.css";
import { lgout } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";


import { NotificationsNone, Language, Settings, ExitToApp } from "@material-ui/icons";


const MenuItem = styled.div`
  text-decoration: underline;
  font-size: 17px;
  cursor: pointer;
  margin-left: 25px;
`;

export default function Topbar() {
  const dispatch = useDispatch();

  const handleClick = async () => {
    console.log("hello");
    lgout(dispatch);
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Volunteer</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">0</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">0</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div> */}
          <Link to="/" onClick={handleClick} style={{ textDecoration: 'none', color: 'black' }}>
              <MenuItem style={{ textDecoration: 'none', color: 'black' }}><b>Logout</b></MenuItem>
            </Link>
        </div>
      </div>
    </div>
  );
}
