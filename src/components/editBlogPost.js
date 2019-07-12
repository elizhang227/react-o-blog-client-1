import React, { Component } from 'react';

class EditBlogPost extends Component {
    state = {
        newTitle: '',
        newContent: ''
    }

    render() {
        return (
            <div>
                <h2>Title:</h2>
                <h3>Content</h3>
            </div>
        )
    }
}

export default EditBlogPost;