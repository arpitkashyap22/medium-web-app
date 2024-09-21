import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlog } from "../hooks";

export const Blogs = () => {
    const {loading, blogs} = useBlog();
    blogs.forEach(ele => console.log(ele.title));

    if(loading){
        return <div>
            loading...
        </div>
    }
 

  return (
    <div>
      <AppBar></AppBar>
      <div className="flex justify-center">
      {blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard
              // Ensure unique key for each BlogCard
              authorName={blog.authorId}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.publishedDate}
            />
          ))
        ) : (
          <p>No blogs available</p>  // Handle empty blogs case
        )}
        {/* <div className="max-w-xl">
           <BlogCard authorName="Arpit kashyap" title="AI Sustainablity" content="TEch park" publishedDate={"22-12-2000"}></BlogCard>
        </div> */}
      </div>
    </div>
  );
};
