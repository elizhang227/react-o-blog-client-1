import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class BlogList extends Component {
    state = {
        posts: []
    }

    //life cycle method
    async componentDidMount() {
        const posts = await this.loadData();
        this.setState({
            posts
        })
    }

    loadData = async () => {
        const url = 'http://localhost:3000/v1/all';
        const response = await fetch(url);
        const data = response.json();
        return data;
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                <h1>Blog list</h1>
                <ul>
                    {posts.map((post, index) =>
                        <li key={`post${index}`}>
                            <Link to={`post/${post.id}`}>{post.title}</Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default BlogList;