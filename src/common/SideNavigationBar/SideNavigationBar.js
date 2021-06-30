import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { FormButton } from "./../../common/FormElements/FormElements";
import { useAuth } from "./../../context/authContext";

const SideNavigationBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { currentUserType, logout } = useAuth();

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
                International Conference of Application Framework 2021
              </Link>
            </li>
          </ul>
          <Link
            to="/user-profile"
            className="ml-auto"
            style={{ paddingRight: "20px" }}
          >
            <FormButton>
              <span
                className="mr-2"
                style={{ "font-family": "Anton", paddingRight: "10px" }}
              >
                <i className="FaSignInAlts" />
                Profile
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
            {currentUserType !== "ADMIN" && (
              <li className="nav-text">
                <Link
                  to="/user-dashboard"
                  style={{
                    textDecoration: "none",
                    "font-family": "Anton",
                  }}
                >
                  <span>Dashboard</span>
                </Link>
              </li>
            )}
            <li className="nav-text">
              <Link
                to="/user-profile"
                style={{
                  textDecoration: "none",
                  "font-family": "Anton",
                }}
              >
                <span>Profile</span>
              </Link>
            </li>
            {currentUserType === "RESEARCHER" && (
              <li className="nav-text">
                <Link
                  to="/upload-new-research"
                  style={{
                    textDecoration: "none",
                    "font-family": "Anton",
                  }}
                >
                  <span>Upload New</span>
                </Link>
              </li>
            )}
            {currentUserType === "WORKSHOPCONDUCTOR" && (
              <li className="nav-text">
                <Link
                  to="/upload-new-workshop"
                  style={{
                    textDecoration: "none",
                    "font-family": "Anton",
                  }}
                >
                  <span>Upload New</span>
                </Link>
              </li>
            )}
            {currentUserType === "RESEARCHER" && (
              <li className="nav-text">
                <Link
                  to="/view-submitted-research-documents"
                  style={{
                    textDecoration: "none",
                    "font-family": "Anton",
                  }}
                >
                  <span>View All</span>
                </Link>
              </li>
            )}

            {currentUserType === "WORKSHOPCONDUCTOR" && (
              <li className="nav-text">
                <Link
                  to="/view-submitted-workshops"
                  style={{
                    textDecoration: "none",
                    "font-family": "Anton",
                  }}
                >
                  <span>View All</span>
                </Link>
              </li>
            )}
            {currentUserType === "ATTENDEE" && (
              <li className="nav-text">
                <Link
                  to="/user-payment"
                  style={{
                    textDecoration: "none",
                    "font-family": "Anton",
                  }}
                >
                  <span>Payments</span>
                </Link>
              </li>
            )}
            {currentUserType === "RESEARCHER" && (
              <li className="nav-text">
                <Link
                  to="/user-payment"
                  style={{
                    textDecoration: "none",
                    "font-family": "Anton",
                  }}
                >
                  <span>Payments</span>
                </Link>
              </li>
            )}
            {currentUserType === "RESEARCHER" && (
              <li className="nav-text">
                <Link
                  to="/payment-history"
                  style={{
                    textDecoration: "none",
                    "font-family": "Anton",
                  }}
                >
                  <span>Payment History</span>
                </Link>
              </li>
            )}

            {currentUserType === "ATTENDEE" && (
              <li className="nav-text">
                <Link
                  to="/payment-history"
                  style={{
                    textDecoration: "none",
                    "font-family": "Anton",
                  }}
                >
                  <span>Payment History</span>
                </Link>
              </li>
            )}
            {currentUserType === "ADMIN" && (
              <>
                <li className="nav-text">
                  <Link
                    to="/admin"
                    style={{
                      textDecoration: "none",
                      "font-family": "Anton",
                    }}
                  >
                    <span>Admin Dashboard</span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link
                    to="/admin/research-notices"
                    style={{
                      textDecoration: "none",
                      "font-family": "Anton",
                    }}
                  >
                    <span>Research Notices</span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link
                    to="/admin/workshop-notices"
                    style={{
                      textDecoration: "none",
                      "font-family": "Anton",
                    }}
                  >
                    <span>Workshop Notices</span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link
                    to="/admin/research-topics"
                    style={{
                      textDecoration: "none",
                      "font-family": "Anton",
                    }}
                  >
                    <span>Manage Reserach Topics</span>
                  </Link>
                </li>
              </>
            )}
            <li className="nav-text">
              <Link
                to="/user-log-out"
                style={{
                  textDecoration: "none",
                  "font-family": "Anton",
                }}
                onClick={() => {
                  logout();
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
