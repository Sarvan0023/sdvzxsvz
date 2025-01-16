import React from "react";

const Category = () => {
  const categories = [
    { name: "WOMEN'S", bgClass: "bg-[url(https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg.webp)]" },
    { name: "ACCESSORIES'S", bgClass: "bg-[url(https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg.webp)]" },
    { name: "MEN'S", bgClass: "bg-[url(https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg.webp)]" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`relative w-[290px] h-[220px]  shadow-lg overflow-hidden group ${category.bgClass} bg-cover bg-center`}
        >
          <div className="absolute inset-0  flex items-center justify-center">
            <span className="text-black bg-white p-2 text-lg font-bold border">{category.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
