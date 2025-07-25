import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const BlogCard = ({ blog }: {blog: Blog}) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <Image
          src={blog.blog_image}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-xl h-64"
        />
      </figure>
      <div className="card-body">
        <p className="flex items-center justify-center text-accent bg-cyan-100 w-44 rounded-full py-1">
          <FaCalendar className="mr-2" />
          {blog.publish_date}
        </p>
        <h2 className="card-title">
          {blog.title.length > 30
            ? blog.title.slice(0, 30) + "..."
            : blog.title}
        </h2>
        <p className="text-gray-500">
          {blog.description.length > 100
            ? blog.description.slice(0, 60) + "..."
            : blog.description}
          <Link href={`/blogs/${blog.id}`} className="text-accent">
            Read More
          </Link>
        </p>
        <div className="flex justify-between items-center mt-5">
          <div className="avatar items-center">
            <div className="w-8 mr-1 rounded-full">
              <Image
                src="https://i.ibb.co/Z6YTKVrp/linkedin.png"
                width={100}
                height={100}
                alt="author image"
              />
            </div>
            <span>{blog.author_name}</span>
          </div>

          <div className="flex items-center">
            <AiFillLike className="text-accent text-xl" /> {blog.total_likes}{" "}
            Likes
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;