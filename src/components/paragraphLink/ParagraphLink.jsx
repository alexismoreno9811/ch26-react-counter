// Importar hojas de estilo
import React from "react";
import "../../styles/paragraphLink/paragraph-link.css"

// Props: comunican los componentes padres con los componentes hijos.

const ParagraphLink = ({href, color, children}) => {
  const myParagraph = (
    <React.Fragment>
      <a  className="content" style={{color: color }} href= {href} target="_blank">
        <p>{children}</p>
      </a>
    </React.Fragment>
  );
  return myParagraph;
};

export default ParagraphLink;