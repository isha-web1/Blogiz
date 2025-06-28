import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
if (!apiUrl) {
  throw new Error("NEXT_PUBLIC_API_URL environment variable is not set!");
}

export const generateStaticParams = async () => {
  try {
    const res = await fetch(`${apiUrl}/blogs`);
    if (!res.ok) return [];
    const blogs: Blog[] = await res.json();
    return blogs.slice(0, 3).map((blog: Blog) => ({
      blogId: blog.id,
    }));
  } catch {
    return [];
  }
};

// NOTE: params is a Promise!
export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const awaitedParams = await params;
  const res = await fetch(`${apiUrl}/blogs/${awaitedParams.blogId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Blog not found</div>;
  }

  const blog = await res.json();
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
}