import React, { Component } from 'react';
import fetch from '../services/apiUtils';

export default class Resty extends Component {
    state = {
        loading: false,
        url: '',
        method: '',
        body: '',
        response: '',
        history: '',
    }

    // on controls submit > fetch(params) > response > render response & history

    // handle change controls for url, method, body

    // on change for history and return

    render() {
        return (
            <>
            </>
        );
    }
}