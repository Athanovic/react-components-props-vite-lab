import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import { blogInfo, articles } from "./blog";

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