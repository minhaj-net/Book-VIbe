import React from "react";
import bannerImg from "../../assets/singleBook.png";

const Banner = () => {
  return (
    <div className="flex gap-6 md:gap-40 justify-center  items-center py-6 flex-col-reverse md:flex-row  bg-[#13131321] rounded-2xl md:mt-12 mb-16">
      <div>
        <h3 className="text-4xl  font-bold text-[#131313] mb-4">
          Books to freshen up <br></br> your bookshelf
        </h3>
        <a className="btn !mr-2 !bg-[#23BE0A] rounded-xl text-white">
          View The List
        </a>
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
