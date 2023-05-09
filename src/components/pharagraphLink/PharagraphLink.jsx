// Props: comunican los componentes padres con los componentes hijos.

const PharagraphLink = (props) => {
  const myPharagraph = (
    <>
      <a style={{ textDecoration: "none", color: props.color }} href= {props.href} target="_blank">
        <p>Te llevo al infinito { 5*5 }</p>
      </a>
    </>
  );
  return myPharagraph;
};

export default PharagraphLink;