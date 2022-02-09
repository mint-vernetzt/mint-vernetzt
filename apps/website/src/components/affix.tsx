import React from "react";

export default function Affix(props: {
  top: number;
  children: React.ReactNode;
  offset?: number;
  className?: string;
}) {
  const element = React.createRef<HTMLDivElement>();
  let oldStyles = {
    position: "",
    top: "",
    width: "",
  };
  // Offset could make the element fixed ealier or later
  const { offset = 0 } = props;
  const [distanceToBody, setDistanceToBody] = React.useState(0);

  const checkPosition = (distanceToBody: number, width: number) => {
    const scrollTop = window.scrollY;

    if (distanceToBody - scrollTop < props.top + offset) {
      if (element.current.style.position != "fixed") {
        for (let key in oldStyles) {
          oldStyles[key] = element.current.style[key];
        }
        element.current.style.position = "fixed";
        element.current.style.width = width + "px";
        element.current.style.top = props.top + "px";
      }
    } else {
      // reset to default
      for (let key in oldStyles) {
        element.current.style[key] = oldStyles[key];
      }
    }
  };

  React.useEffect(() => {
    if (typeof window.scrollY === "undefined") {
      // don't work in IE
      return;
    }
    const handleScroll = () => {
      requestAnimationFrame(() => {
        element.current &&
          checkPosition(distanceToBody, element.current.clientWidth);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // get initial distance
  React.useEffect(() => {
    const value = window.scrollY + element.current.getBoundingClientRect().top;
    setDistanceToBody(value);
  }, [element.current]);

  // call position check on render (required on list length change)
  React.useEffect(() => {
    checkPosition(distanceToBody, element.current.clientWidth);
  }, [distanceToBody, element.current]);

  return (
    <div ref={element} className={props.className}>
      {props.children}
    </div>
  );
}
