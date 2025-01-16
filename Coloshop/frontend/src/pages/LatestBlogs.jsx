import React from "react";

const LatestBlogs = () => {
  const blogs = [
    {
      id: 1,
      image: "https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg.webp",
    },
    {
      id: 2,
      image: "https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg.webp",
    },
    {
      id: 3,
      image: "https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg.webp",
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="w-[255px] h-[205px] bg-white shadow-lg  overflow-hidden"
          >
            <img
              src={blog.image}
              className="w-full h-full object-cover"
            />
            <div className="p-4">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
