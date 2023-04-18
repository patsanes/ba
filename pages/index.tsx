import React from "react";
import Layout from "../components/Layout";

const Blog = () => {
  return (
    <Layout>
      <div className="page">
        <h1>Welcome</h1>
      </div>
      <style jsx>{`
        h1 {
          font-size: 2rem;
          font-weight: 800;
          margin: 0;
        }
      `}</style>
    </Layout>
  );
};

export default Blog;
