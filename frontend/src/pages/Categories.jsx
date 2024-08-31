import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const cat = [
    {
      name: "Comedy",
      color: "bg-purple-200",
      to: "/category/Comedy",
      img: "https://img.freepik.com/free-vector/cat-monkey-performing-singing-stage_1308-77965.jpg?t=st=1725127945~exp=1725131545~hmac=ea5834c637221b11568003734d32a3dbeb884bafcf7056906ab21d21519e35a3&w=996 ",
    },
    {
      name: "Business",
      color: "bg-green-200",
      to: "/category/Bussiness",
      img: "https://img.freepik.com/free-vector/hand-drawn-bussiness-innovation_23-2149153450.jpg",
    },
    {
      name: "Education",
      color: "bg-red-200",
      to: "/category/Education",
      img: "https://img.freepik.com/free-photo/front-view-stacked-books-ladders-education-day_23-2149241046.jpg?t=st=1725127406~exp=1725131006~hmac=cd46e0ba0c6a309ea368d21fb51f422c7b7e0b7c73bc248ae5e649024e57a2e1&w=996",
    },
    {
      name: "Government",
      color: "bg-indigo-200",
      to: "/category/Government",
      img: "https://www.whitehouse.gov/wp-content/uploads/2021/01/us-capitol.jpg",
    },
    {
      name: "Hobbies",
      color: "bg-zinc-200",
      to: "/category/Hobby",
      img: "https://img.freepik.com/free-vector/pack-people-enjoying-their-hobbies_52683-17773.jpg?t=st=1725127646~exp=1725131246~hmac=766bbea0d7b199692ec4074747627525c4a116b3858e4a9ce8c9681b5110f389&w=996",
    },
  ];
  return (
    <div className="h-screen lg:h-[78vh]">
      <div className="px-4 lg:px-12 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cat.map((items, i) => (
          <Link
            to={items.to}
            key={i}
            className={`rounded px-8 py-4 text-xl font-semibold ${items.color} hover:scale-105 shadow-xl transition-all duration-300 relative h-[22vh] overflow-hidden `}
          >
            <div>{items.name}</div>
            <div className="w-[100%] flex items-center justify-end absolute -bottom-2 -right-2">
              <img
                src={items.img}
                alt="category"
                className="rounded rotate-12 h-[15vh] md:h-[17vh] lg:h-[18vh]"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
