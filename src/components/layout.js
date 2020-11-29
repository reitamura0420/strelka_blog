import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

import Category from "../components/category";
import Archive from "../components/archive";
import Recomend from "../components/recomend";
import Bio from "../components/bio";
import { AdSense } from "../common/adsense";
import MediaQuery from "react-responsive";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 24px;
`;
const MainWrapper = styled.div`
  margin-right: 24px;
`;
const SideWrapper = styled.div`
  & {
    margin-bottom: 24px;
  },
`;
const ArchiveWrapper = styled.div`
  background-color: #ffffff;

  @media (max-width: 600px) {
    margin-top: 24px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;
const HeaderWrapper = styled.header`
  background-color: #000000;
  height: 68px;
`;
const HeaderText = styled.p`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  font-family: Arial Black;
  font-size: 18px;
  color: #ffffff;

  @media (max-width: 600px) {
    text-align: center;
  }
`;
const FotterWrapper = styled.footer`
  background-color: #ffffff;
  height: 48px;
`;

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <div>
      <MediaQuery query="(max-width: 600px)">
        <HeaderWrapper>
          <HeaderText>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </HeaderText>
        </HeaderWrapper>
        <ArchiveWrapper>{children}</ArchiveWrapper>
        <SideWrapper>
          <Recomend />
          <Archive />
          <Category />
          <AdSense />
        </SideWrapper>
        <Bio />
      </MediaQuery>
      <MediaQuery query="(min-width: 600px)">
        <HeaderWrapper>
          <HeaderText>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </HeaderText>
        </HeaderWrapper>
        <Wrapper>
          <MainWrapper>
            <ArchiveWrapper>{children}</ArchiveWrapper>
            <Bio />
          </MainWrapper>
          <SideWrapper>
            <Recomend />
            <Archive />
            <Category />
            <AdSense />
          </SideWrapper>
        </Wrapper>
        <FotterWrapper></FotterWrapper>
      </MediaQuery>
    </div>
  );
};

export default Layout;
