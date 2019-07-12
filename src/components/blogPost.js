import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogList extends Component {
    state = {
        post: {}
    }

    async componentDidMount() {
        const post = await this.loadData();
        this.setState({
            post
        })
    }

    loadData = async () => {
        const postId = this.props.match.params.post_id;
        const url = `http://localhost:3000/v1/post/${postId}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
    }

    render() {
        const { post } = this.state;
        return (
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <Link to={`/edit/post${post.id}`}>Edit</Link>
            </div>
        )
    }
}
export default BlogList;