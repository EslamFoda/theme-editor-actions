import cn from "clsx";
import React from "react";
const Container = ({
  children,
  className,
  style = {},
  clean = false, // Full Width Screen
}) => {
  const rootClassName = cn(className, {
    "mx-auto max-w-6xl  px-6 w-full": !clean,
  });

  

  return (
    <div style={style} className={rootClassName}>
      {children}
    </div>
  );
};

export default Container;
