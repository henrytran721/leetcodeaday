import React, { useState, useEffect, useRef } from "react";
import "../styles/accordian.scss";

const Accordion = function (props) {
  // title, content
  const { title, content } = props;
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  function expandOrCollapse() {
    if (!active) {
      expand();
    } else {
      collapse();
    }
  }

  function expand() {
    setActive(!active);
    contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    contentRef.current.style.opacity = `1`;
    contentRef.current.style.margin = "1% 0";
  }

  function collapse() {
    setActive(!active);
    contentRef.current.style.height = "0";
    contentRef.current.style.margin = "0";
    contentRef.current.style.opacity = "0";
  }

  return (
    <div className="accordianDiv" onClick={expandOrCollapse}>
      <div className="accordianTitleContent">
        <p className="title">{title}</p>
        <p className="caret">&or;</p>
      </div>
      <p className="content" ref={contentRef}>
        {content}
      </p>
    </div>
  );
};

export default Accordion;
