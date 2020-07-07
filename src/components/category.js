import React from "react";

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

const Category = () => {
  const title = "カテゴリ別記事";
  const date = ["整備中"];
  return (
    <Wrapper>
      <RecomendHeader>
        <HeaderText>{title}</HeaderText>
        <Border />
      </RecomendHeader>
      <main>
        <Column>
          {date.map((item, i) => {
            return <li>{item}</li>;
          })}
        </Column>
      </main>
    </Wrapper>
  );
};

export default Category;
