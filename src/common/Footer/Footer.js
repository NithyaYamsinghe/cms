import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper
      className="page-footer font-small"
      style={{ marginTop: "600px" }}
    >
      <div className="footer-copyright text-center py-3 mt-5">
        © 2021 Copyright :
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          2021S1_JUNE_WE_07
        </Link>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background: #060b26;
  position: relative;
  margin-top: 430px;
  bottom: 100%;
  width: 100%;
  color: #fff;
  font-family: "Anton", sans-serif !important;
`;
