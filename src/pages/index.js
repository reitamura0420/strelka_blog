import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../common/Image";
import { value } from "../common/eyeCatch";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styled from "styled-components";
import MediaQuery from "react-responsive";

const useStyles = makeStyles({
  readButton: {
    background: "#ffffff",
    border: "1px solid #a1cff4",
    borderRadius: 3,
    color: "white",
    height: 40,
    padding: "0 30px",
    marginTop: "12px",
  },
});

const Wrapper = styled.div`
  background-color: #f7f7f7;
`;

const H2 = styled.h2`
  padding: 0.5em; /*文字周りの余白*/
  color: #010101; /*文字色*/
  background: #eaf3ff; /*背景色*/
  border-bottom: solid 3px #516ab6; /*下線*/
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
`;

const MainContent = styled.div``;

const ArticleItem = styled.article`
  margin-bottom: 24px;
  background-color: #ffffff;
  padding-left: 20px;
  padding-top: 32px;
  padding-bottom: 4px;

  @media (max-width: 600px) {
    margin: 8px;
    padding: 0px;
  }
`;

const EyeCatch = styled.div`
  width: 256px;
  height: 256px;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.div`
  @media (max-width: 600px) {
    padding-top: 8px;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const ContentText = styled.p`
  margin-bottom: 0px;
`;

const ContentTime = styled.p`
  margin-bottom: 0px;
  @media (max-width: 600px) {
    margin: 8px;
    margin-top: 0px;
  }
`;

const ContentTitle = styled(Link)`
  font-size: 24px;
  margin-top: rhythm(1 / 4);
  margin-bottom: 0px;
  @media (max-width: 600px) {
    font-size: 22px;
    margin: 8px;
    padding-top: 32px;
  }
`;

const BlogIndex = ({ data, location }) => {
  const classes = useStyles();
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Wrapper>
      <Layout location={location} title={"chellBlog"}>
        <SEO
          title="chellBlog"
          description={
            "スマブラ SP のオンライン対戦でスマブラ初心者が逆 VIP から VIP に這い上がる物語を描いてます。ピカチュウのコンボや基本テクニックについても記事を書いております"
          }
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <ArticleItem key={node.fields.slug}>
              <MediaQuery query="(min-width: 600px)">
                <Content>
                  <MainContent>
                    <header>
                      <ContentTitle
                        style={{ boxShadow: `none` }}
                        to={node.fields.slug}
                      >
                        {title}
                      </ContentTitle>
                      <ContentTime>{node.frontmatter.date}</ContentTime>
                    </header>
                    <section>
                      <ContentText
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </section>
                    <ButtonWrapper>
                      <Button className={classes.readButton}>
                        <Link
                          style={{ boxShadow: `none` }}
                          to={node.fields.slug}
                        >
                          Read More
                        </Link>
                      </Button>
                    </ButtonWrapper>
                  </MainContent>
                  {value.map((v) => {
                    return title === v.title && <Image filename={v.eyeCatch} />;
                  })}
                </Content>
              </MediaQuery>
              <MediaQuery query="(max-width: 600px)">
                <Header>
                  <ContentTitle
                    style={{ boxShadow: `none` }}
                    to={node.fields.slug}
                  >
                    {title}
                  </ContentTitle>
                  <ContentTime>{node.frontmatter.date}</ContentTime>
                </Header>
                {value.map((v) => {
                  return title === v.title && <Image filename={v.eyeCatch} />;
                })}
                <section>
                  <ContentText
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
                <ButtonWrapper>
                  <Button className={classes.readButton}>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      Read More
                    </Link>
                  </Button>
                </ButtonWrapper>
              </MediaQuery>
            </ArticleItem>
          );
        })}
      </Layout>
    </Wrapper>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
