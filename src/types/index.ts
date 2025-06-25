export interface BlogPost {
  id: string;
  title: string;
  description: string;
  publish_date: string; // Consider using `Date` type if you'll be working with Date objects
  author_name: string;
  blog_image: string;
  total_likes: string; // Consider using `number` type if you'll be performing numerical operations
}