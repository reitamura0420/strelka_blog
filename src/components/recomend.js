import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #ffffff;
  @media (min-width: 600px) {
    width: 300px;
  }
  height: 400px;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const RecomendHeader = styled.header`
  height: 50px;
  text-align: center;
`;

const HeaderText = styled.p`
  padding-top: 28px;
  font-size: 20px;
`;

const Border = styled.hr`
  width: 20%;
  margin-left: 120px;
`;

const Column = styled.ul`
  list-style: none;
  margin-top: 60px;
  margin-left: 20px;
  margin-bottom: 0px;
`;

const Recomend = () => {
  const title = "おすすめ記事";
  const recomend = [
    {
      title: "逆vipの逆襲～序章～",
      link: "/hello-world/vip",
    },
    {
      title: "ピカチュウのお手軽コンボ",
      link: "/vip/day8",
    },
    {
      title: "振り向き掴み・透かし掴み",
      link: "/vip/day15",
    },
    {
      title: "小ジャンプ・急降下",
      link: "/vip/day1",
    },
  ];
  return (
    <Wrapper>
      <RecomendHeader>
        <HeaderText>{title}</HeaderText>
        <Border />
        <ui>
          {recomend.map((v) => {
            return (
              <li>
                <Link style={{ boxShadow: `none` }} to={v.link}>
                  {v.title}
                </Link>
              </li>
            );
          })}
        </ui>
      </RecomendHeader>
      <main></main>
    </Wrapper>
  );
};

export default Recomend;
