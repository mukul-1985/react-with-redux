import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newPost, logger } from '../actions/postActions';

import store from '../store';

class Postform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        console.log(store.dispatch(logger('sample test log')));

        // call new post
        //this.props.newPost(post);

        // call dispatch from store
        store.dispatch(newPost(post));
    }

    render() {
        return(
            <div>
                <h1>Add Post</h1>
                <form onSubmit={ this.onSubmit }>
                    <div>
                        <label>Title: </label><br />
                        <input type="text" name="title" value={ this.state.title } onChange={ this.onChange }/>
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <textarea name="body" value={ this.state.body } onChange={ this.onChange }/>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

Postform.propTypes = {
    newPost: PropTypes.func.isRequired
}

export default connect(null)(Postform);