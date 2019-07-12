import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogList from './components/blogList';
import BlogPost from './components/blogPost';
import EditBlogPost from './components/editBlogPost';

function App() {
  return (
    <Router>
      <Route path='/' exact component={BlogList} />
      <Route path='/post/:post_id?' component={BlogPost} />
      <Route path='/edit/:post_id?' component={EditBlogPost} />
    </Router>
  );
}

export default App;
