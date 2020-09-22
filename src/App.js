import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

const Article = (props) => <div>
  <h1>{props.data.title}</h1>
  <p>{props.data.content}</p>
</div>

function App() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    async function getArticles() {
      const res = await fetch('/api/articles');
      const newArticles = await res.json();
      setArticles(newArticles.articles);
    }
    getArticles();
  }, []);
  return (
    <main>
      <h2>Articles</h2>
      <p>{articles ? articles.map(data => <Article data={data}/>)  : 'Loading articles...'}</p>
    </main>
  );
}

export default App;
