import React from "react";
import Header from "./Header";           // Remove "./components/"
import About from "./About";             // Remove "./components/"
import ArticleList from "./ArticleList"; // Remove "./components/"
import blogData from "../data/blog";     // Change to "../data/blog"

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