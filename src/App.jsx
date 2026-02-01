import React from "react";
import Header from "./components/Header";     // Add back "./components/"
import About from "./components/About";       // Add back "./components/"
import ArticleList from "./components/ArticleList"; // Add back "./components/"
import blogData from "./data/blog";           // Keep as is

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;