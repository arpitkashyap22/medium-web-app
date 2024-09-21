import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlog } from "../hooks";

// Define Blog type
interface Blog {
  id: string;
  authorId: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const Blogs: React.FC = () => {
  const { loading, blogs } = useBlog();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center flex-wrap">
        {blogs.length > 0 ? (
          blogs.map((blog: Blog) => (
            <BlogCard
              key={blog.id} // Ensure unique key for each BlogCard
              authorName={blog.authorId}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.publishedDate}
            />
          ))
        ) : (
          <p>No blogs available</p> // Handle empty blogs case
        )}
      </div>
    </div>
  );
};
