import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export const useBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]); 

  useEffect(() => {
    const controller = new AbortController(); // AbortController to prevent memory leaks
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal: controller.signal,
        };

        const response = await axios.get(`${BACKEND_URL}/blog/bulk`, config);
        setBlogs(response.data);
        setLoading(false);
      } catch (err : any) {
          console.log("Request canceled", err.message);
      }
    };

    fetchBlogs();

    return () => {
      controller.abort(); // Cancel request if component unmounts
    };
  }, []);

  return {
    loading,
    blogs
  };
};
