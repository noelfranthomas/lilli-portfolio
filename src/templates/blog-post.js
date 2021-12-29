import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  featuredimage
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      <br />
      <br />
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          
          <div className="column is-5 is-offset-1">
            <img
              style={{borderRadius: "10px"}}
              src={featuredimage}
              alt={`featured image`}
            />
          </div>

          <div className="column is-5">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
          </h1>

          <p>{description}</p>

          <br />

          <Link
          to="/home/"
          aria-label={`Go to the store`}
          >
            <div style={{backgroundColor: "#646eca", borderRadius: "10px", display: "flex", justifyContent: "center", padding: "10px 0"}}>
              <div style={{color: "white"}}>
                <b>
                Contact Us
                </b>
              </div>
              <br />
            </div>
          </Link>

          {tags && tags.length ? (
            <div style={{ marginTop: `3rem` }}>
              <h4>Tags</h4>
              <ul className="taglist">
                {tags.map((tag) => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.string
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        featuredimage={post.frontmatter.featuredimage}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage
        tags
      }
    }
  }
`;
