import React from "react";
import Article from "./Article";

function ArticleList({ articles }) {
  return (
    <main>
      {articles.map((article) => (
        <Article
          key={article.id}  // unique key for each article
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
