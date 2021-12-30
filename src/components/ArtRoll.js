import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import "./ArtRoll.css";

class ArtRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="artCardPostWrapper">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="artCardPost" key={post.id}>
              <Link
                to={post.fields.slug}
                style={{textDecoration: "none", color: "black"}}
              >
              <article>
                <header>
                  {post.frontmatter.featuredimage ? (
                    <img
                      className='image'
                      src={post.frontmatter.featuredimage}
                      alt={`${post.frontmatter.title}`}
                    />
                  ) : <div>Image Unavailable</div> }
                </header>

                <div className="artCardBody">
                  <h4 className="post-meta">
                    <b>
                    {post.frontmatter.title}
                      </b>
                  </h4>
                  <p>
                    {post.excerpt}
                  </p>
                </div>

                
              </article>
              </Link>
            </div>
          ))}
      </div>
    )
  }
}

ArtRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function ArtRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 100)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredimage
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <ArtRollTemplate data={data} count={count} />}
    />
  );
}