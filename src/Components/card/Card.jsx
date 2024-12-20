import React from "react";
import PageHeading from "../pageHeading/PageHeading";

const Card = () => {
  return (
    <div>
      <div className=" flex flex-col w-[396px] h-[156px] rounded-[20px] p-6 xl:p-6 mt-3 gap-4 shadow justify-between">
        <div className="flex">
          <div>Icon</div>
          <PageHeading
            heading="Consulations"
            size="12px"
            weight="600"
            lineHeight="30px"
          />
        </div>
        <div>24</div>
        <div className="flex ">
          <div>Icon</div>
          <div> 15% increase </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
