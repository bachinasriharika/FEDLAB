import React, {useContext} from "react";
import {BlogContext} from './BlogContext';

function BlogContextDemo() {
  const binfo = useContext(BlogContext);
  return (
      <div>
       <p>Topic: {binfo.React.post}</p>
       <p>Author: {binfo.React.author}</p>
      </div>
  );
}

export default BlogContextDemo;
---------------------------
  import React from 'react';
import BlogContextDemo from './BlogContextDemo'

const blogInfo = {
  React: {
    post: "Learn useContext Hooks",
    author: "Varun K"
  },
  NodeJS: {
    post: "Node Commands",
    author: "Veena M"
  }
};

export const BlogContext  = React.createContext(blogInfo);

export default function App() {
  return (
    <div className="App">
      <div>
      <h1>Hello KP</h1>
      <BlogContext.Provider value={blogInfo}>
           <BlogContextDemo />
      </BlogContext.Provider>
      </div>
    </div>
  );
}
------------------
import BlogContextDemo from "./BlogContextDemo";
  function App() {
    return(
   <div>
    <BlogContextDemo/>
   </div>
    )
  }
export default App;
