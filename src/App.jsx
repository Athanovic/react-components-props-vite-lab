import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import { blogInfo, articles } from "./data/blog";

function App() {
  return (
    <div>
      <Header name={blogInfo.name} />
      <About image={blogInfo.image} about={blogInfo.about} />
      <ArticleList posts={articles} />
    </div>
  );
}

export default App;