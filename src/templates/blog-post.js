import React from "react";
import { Link, graphql } from "gatsby";
import Image from "../common/Image";
import { value } from "../common/eyeCatch";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import { renderAst } from "./theme";
import MediaQuery from "react-responsive";

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f7f7f7;
`;

const Section = styled.section`
  margin: 32px;
  @media (max-width: 600px) {
    margin: 8px;
  }
`;

const HeaderText = styled.p`
  padding-left: 32px;
  font-size: 2em;
  padding-top: 20px;
  margin-bottom: 0px;
  font-family: Arial Black;
  @media (max-width: 600px) {
    padding-left: 8px;
    padding-right: 8px;
    font-size: 24px;
    margin-top: rhythm(1 / 4);
    margin-bottom: 0px;
  }
`;
const HeaderTime = styled.p`
  display: block;
  padding-left: 32px;
  margin-bottom: rhythm(1);
  @media (max-width: 600px) {
    padding-left: 8px;
    margin-bottom: 0px;
  }
`;

const EyeCatch = styled.div`
  width: 374px;
  height: 374px;
  margin-left: auto;
  margin-right: auto;
`;

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = post.frontmatter.title;
  const description = post.frontmatter.description;
  const { previous, next } = pageContext;

  return (
    <Wrapper>
      <Layout location={location} title={"chellBlog"}>
        <SEO title={siteTitle} description={description} />
        <article>
          <header>
            <HeaderText>{post.frontmatter.title}</HeaderText>
            <HeaderTime>{post.frontmatter.date}</HeaderTime>
          </header>
          <MediaQuery query="(min-width: 600px)">
            {value.map((v) => {
              return (
                siteTitle === v.title && (
                  <EyeCatch>
                    <Image filename={v.eyeCatch} />
                  </EyeCatch>
                )
              );
            })}
          </MediaQuery>
          <MediaQuery query="(max-width: 600px)">
            {value.map((v) => {
              return siteTitle === v.title && <Image filename={v.eyeCatch} />;
            })}
          </MediaQuery>
          <Section>{renderAst(post.htmlAst)}</Section>
          <hr
            style={{
              paddingLeft: `20px`,
              paddingRight: `20px`,
              marginBottom: rhythm(1),
            }}
          />
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    </Wrapper>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
