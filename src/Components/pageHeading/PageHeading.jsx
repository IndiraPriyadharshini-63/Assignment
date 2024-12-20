import React from "react";

const PageHeading = (props) => {
  return <div className={`text-[${props.size}] `}>{props.heading}</div>;
};

export default PageHeading;
