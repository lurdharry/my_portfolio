import React from 'react';
import PropTypes from 'prop-types';
import LoaderSVG from './images/loader.svg';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}

        <div
          key={`loader`}
          id="___loader"
          style={{
            alignItems: 'center',
            backgroundColor: '#363636',
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            color: `white`,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            textAlign: `center`,
          }}
        >
          <img
            src={LoaderSVG}
            alt="loading spinner"
            width="100vw"
            height="100vw"
            style={styles.loading}
          />
        </div>
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

const styles = {
  loading: {
    animation: `$radialcolor 3s ease infinity`,
  },

  '@keyframes radialcolor': {
    '0%': {
      width: '150vw',
      height: '150vw',
    },
    '20%': {
      width: '200vw',
      height: '200vw',
    },

    '60%': {
      width: '180vw',
      height: '180vw',
    },

    '80%': {
      width: '210vw',
      height: '210vw',
    },

    '100%': {
      width: '100vw',
      height: '100vw',
    },
  },
};
