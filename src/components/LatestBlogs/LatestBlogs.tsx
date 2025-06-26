import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";


const LatestBlogs = ({blogs} : {blogs : Blog[]}) => {
    return (
        <div className="w-[90%] mx-auto my-10">
            <h1 className="text-4xl text-center my-4">Latest Blog From <span className="text-accent">Blogiz</span></h1>
            <p className="text-gray-400 mt-3 w-2/4 text-center mx-auto">
            <i>
              Dive into the fascinating world of quantum computing, where
              unlocking unprecedented computational power.
            </i>
          </p>
          <div className="grid grid-cols-2 gap-4 my-10 ">
          {
              blogs.slice(0, 2).map((blog) => (<LatestBlogCard key={blog.id} blog={blog}/>))
          }
          </div>
          <div className="grid grid-cols-3 gap-4 my-10 ">
          {
              blogs.slice(2, 5).map((blog) => (<BlogCard key={blog.id} blog={blog}/>))
          }
          </div>
        </div>
    );
};

export default LatestBlogs;