import React, { Component } from 'react';

class BlogForm extends Component {
    state = {
        title: '',
        content: ''
    }

    titleChange(e) {
        this.setState({ title: e.target.value })
    }

    contentChange(e) {
        this.setState({ content: e.target.value })
    }

    render() {
        return (
            <form>
                <h3>Title:</h3>
                <input onChange={(e) => this.titleChange(e)} /><br />
                <textarea onChange={(e) => this.contentChange(e)} />
            </form>
        )
    }
}

export default BlogForm;