import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlog } from "../hooks";

export const Blogs = () => {
    const {loading, blogs} = useBlog();
    console.log(blogs);

    if(loading){
        return <div>
            loading...
        </div>
    }
  return (
    <div>
      <AppBar></AppBar>
      <div className="flex justify-center">
        <div className="max-w-xl">
            <BlogCard authorName="Arpit kashyap" title="AI Sustainablity" content="TEch park" publishedDate={"22-12-2000"}></BlogCard>
        </div>
      </div>
    </div>
  );
};
