import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

const Video = ({ src, ...rest }) => {
  const data = useStaticQuery(graphql`
    query {
      videos: allFile(filter: { internal: { mediaType: { regex: "/video/" } } }) {
        edges {
          node {
            relativePath
            publicURL
            extension
          }
        }
      }
    }
  `);

  const match = useMemo(() => data.videos.edges.find(({ node }) => src === node.relativePath), [
    data,
    src,
  ]);

  console.log(data.videos);

  const { node: { childImageSharp, publicURL, extension } = {} } = match;

  if (!match) return null;

  return (
    <video autoPlay loop width="100%" height="500px">
      <source src={publicURL} type="video/mp4" autoplay {...rest} />
    </video>
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Video;
