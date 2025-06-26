import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";


const BlogsPage = async() => {

    const res = await fetch('http://localhost:5000/blogs',{
        cache: 'no-store', // Disable caching for this request
    })
    const blogs = await res.json();

    return (
        <div>
            <h1 className="text-4xl text-center my-10">All Blog From <span className="text-accent">Blogiz</span></h1>
            <p className="text-gray-400 mt-3 w-2/4 text-center mx-auto">
            <i>
              Dive into the fascinating world of quantum computing, where
              unlocking unprecedented computational power.
            </i>
          </p>
          <div className="grid grid-cols-3 gap-4 my-10 w-[90%] mx-auto">
            {
                blogs.map((blog : Blog) => (<BlogCard key={blog.id} blog={blog}/>))
            }
          </div>
        </div>
    );
};

export default BlogsPage;