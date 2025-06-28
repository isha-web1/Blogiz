import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types";

interface PageProps {
  params: {
    blogId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch('http://localhost:5000/blogs');
  const blogs: Blog[] = await res.json();

  return blogs.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
};

const BlogDetailPage = async ({ params }: PageProps) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: 'no-store',
  });

   if (!res.ok) {
    // You can render a custom not found page or throw an error
    return <div>Blog not found</div>;
  }

  const blog = await res.json();
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailPage;