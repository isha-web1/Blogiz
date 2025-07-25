import LoadingCard from "@/components/ui/LoadingCard";
import { Blog } from "@/types";


const BlogLoadingPage = async() => {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(`${apiUrl}/blogs`);
    const blogs = await res.json();

    return (
        <div className="grid grid-cols-3 gap-4 my-10 w-[90%] mx-auto">
          {
            blogs.map((blog: Blog) => (<LoadingCard key={blog.id}  />))
          } 
        </div>
    );
};

export default BlogLoadingPage;