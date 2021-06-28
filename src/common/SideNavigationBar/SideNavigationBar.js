import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { FormButton } from "./../../common/FormElements/FormElements";

const SideNavigationBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <NavWrapper>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-items ml-5">
              <Link to="/" className="nav-link">
                ICAF
              </Link>
            </li>
          </ul>
          <Link
            to="/sign-up"
            className="ml-auto"
            style={{ paddingRight: "20px" }}
          >
            <FormButton>
              <span
                className="mr-2"
                style={{ "font-family": "Anton", paddingRight: "10px" }}
              >
                <i className="FaSignInAlts" />
                Sign Up
              </span>
            </FormButton>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="nav-text">
              <Link
                to="/products"
                style={{
                  textDecoration: "none",
                  "font-family": "Anton",
                }}
              >
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  "font-family": "Anton",
                }}
              >
                <span>Profile</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  "font-family": "Anton",
                }}
              >
                <span>Upload New</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  "font-family": "Anton",
                }}
              >
                <span>View All</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  "font-family": "Anton",
                }}
              >
                <span>Payments</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link
                to="/profile"
                style={{
                  textDecoration: "none",
                  "font-family": "Anton",
                }}
              >
                <span>Payment History</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  "font-family": "Anton",
                }}
              >
                <span>Log Out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </NavWrapper>
  );
};

export default SideNavigationBar;

const NavWrapper = styled.nav`
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 2rem;
    text-transform: capitalize;
    font-family: "Anton", sans-serif !important;
  }
`;
