import React from "react";
import rehypeReact from "rehype-react";
import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";
import Image from "../common/Image";

const H2 = styled.h2`
  padding: 0.5em; /*文字周りの余白*/
  color: #010101; /*文字色*/
  background: #eaf3ff; /*背景色*/
  border-bottom: solid 3px #516ab6; /*下線*/
`;
const H3 = styled.h3`
  padding: 0.25em 0.5em; /*上下 左右の余白*/
  color: #494949; /*文字色*/
  background: transparent; /*背景透明に*/
  border-left: solid 5px #7db4e6; /*左線*/
`;
const Li = styled.li`
  line-height: 1.5;
  padding: 0.5em 0;
`;
const Ul = styled.ul`
  background: #f1f8ff;
  box-shadow: 0px 0px 0px 10px #f1f8ff; /*線の外側*/
  border: dashed 2px #668ad8; /*破線*/
  border-radius: 9px;
  margin-left: 10px; /*はみ出ないように調整*/
  margin-right: 10px; /*はみ出ないように調整*/
  padding: 0.5em 0.5em 0.5em 2em;
`;

const EyeCatch = styled.div`
  width: 374px;
  height: 374px;
  margin-left: auto;
  margin-right: auto;
`;

// 中略
export const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h2: (props) => {
      return (
        <H2>
          <Typography variant="h5" component="h2" {...props}></Typography>
        </H2>
      );
    },
    h3: (props) => {
      return (
        <H3>
          <Typography variant="h6" component="h3" {...props}></Typography>
        </H3>
      );
    },
    h4: (props) => {
      return (
        <Box
          mt={4}
          mb={2}
          py={1}
          px={1}
          borderBottom={1}
          borderColor="primary.500"
        >
          <Typography variant="body1" component="h4" {...props}></Typography>
        </Box>
      );
    },
    p: (props) => {
      return (
        <Typography
          variant="body2"
          component="p"
          style={{ marginTop: `1rem`, marginBottom: `1rem`, lineHeight: 1.8 }}
          {...props}
        ></Typography>
      );
    },
    li: (props) => {
      return (
        <Li>
          <Typography variant="body2" component="li" {...props}></Typography>
        </Li>
      );
    },
    ul: (props) => {
      return (
        <Ul>
          <Typography variant="body2" component="ul" {...props}></Typography>
        </Ul>
      );
    },
    img: (props) => {
      return (
        <EyeCatch>
          <Image filename={props} />;
        </EyeCatch>
      );
    },
    // などなど
  },
}).Compiler;
