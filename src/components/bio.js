/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  margin-bottom: ${rhythm(2.5)};
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
`;

const Text = styled.a`
  margin-top: 12px;
  margin-right: 20px;
  boxshadow: none;
`;

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/icon.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);
  const { author, social } = data.site.siteMetadata;
  return (
    <Wrapper>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <Text href="https://twitter.com/tSqLxD7Mv8tJ1xi">ちぇる</Text>
      <a
        href="https://game.blogmura.com/ranking/in?p_cid=11060243"
        target="_blank"
      >
        <img
          src="https://b.blogmura.com/game/88_31.gif"
          width="88"
          height="31"
          border="0"
          alt="にほんブログ村 ゲームブログへ"
        />
      </a>
      <br />
      <a href="https://game.blogmura.com/ranking/in?p_cid=11060243">
        にほんブログ村
      </a>
    </Wrapper>
  );
};

export default Bio;
