import React, { Component } from 'react';
import Controls from '../components/Controls';
import RenderResponse from '../components/RenderResponse';
import fetch from '../services/apiUtils';

export default class Resty extends Component {
    state = {
        loading: false,
        url: '',
        method: '',
        body: '',
        apiResponse: ['Waiting for a response'],
        history: [],
    }

    // on controls submit > fetch(params) > response > render response & history
    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading: true });

        const apiResponse = await fetch(this.state);

        this.setState({
            loading: false,
            apiResponse,
            history: [...this.state.history, { method: this.state.method, url: this.state.url }]
        })

        console.log(this.state, 'DONE');
    };

    // handle change controls for url, method, body
    onChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
        console.log(target.name, target.value, this.state, 'onChange');
    };

    // on change for history and return

    render() {
        const { url, method, body, apiResponse } = this.state;
        return (
            <>
                <Controls
                    url={url}
                    method={method}
                    body={body}
                    onChange={this.onChange}
                    handleSubmit={this.handleSubmit}
                />
                <RenderResponse
                    apiResponse={apiResponse}
                />
            </>
        );
    }
}