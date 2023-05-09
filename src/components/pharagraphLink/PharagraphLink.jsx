// Props: comunican los componentes padres con los componentes hijos.

const PharagraphLink = ({href, color, children}) => {
  const myPharagraph = (
    <>
      <a style={{ textDecoration: "none", color: color }} href= {href} target="_blank">
        <p>{children}</p>
      </a>
    </>
  );
  return myPharagraph;
};

export default PharagraphLink;