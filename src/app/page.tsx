import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";

const HomePage = async () => {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL 

  const res = await fetch(`${apiUrl}/blogs`,{
    next : {
      revalidate: 30, // Revalidate every 30 seconds
    }
  })
  const blogs = await res.json();
  

  return (
    <>
     <LatestBlogs blogs={blogs}/>
    </>
  );
};

export default HomePage;