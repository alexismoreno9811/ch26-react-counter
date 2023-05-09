// Importar hojas de estilo
import React from "react";
import "../../styles/paragraphLink/paragraph-link.css"
import PropTypes from 'prop-types';

// Props: comunican los componentes padres con los componentes hijos.
const ParagraphLink = ({ href, color="gray", children }) => {
  const myParagraph = (
    <React.Fragment>
      <a className="content" style={{ color: color }} href={href} target="_blank">
        <p>{children}</p>
      </a>
    </React.Fragment>
  );
  return myParagraph;
};

ParagraphLink.propTypes = {
  href: PropTypes.string.isRequired
};

export default ParagraphLink;