import { createContext, useEffect, useState } from "react";

export const WrapperContext = createContext(null);

export const WrapperProvider = (props) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [footerHeight, setFooterHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useEffect(() => {
    setHeaderHeight(document.getElementsByTagName("header")[0].clientHeight);
    setFooterHeight(document.getElementsByTagName("footer")[0].clientHeight);
  }, []);

  const context = {
    mainContentHeight: windowSize
      ? windowSize.height -
        headerHeight -
        footerHeight -
        // padding-top, padding-bottom, column header height
        24 -
        24 -
        48
      : 0,
  };

  return (
    <WrapperContext.Provider value={context}>
      {props.children}
    </WrapperContext.Provider>
  );
};
