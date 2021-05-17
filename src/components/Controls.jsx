import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
    url,
    method,
    body,
}) => (
    <form onSubmit={onSubmit}>
        <input
            name="url"
            required="true"
            type="url"
            value={url}
            onChange={onURLChange}
        />
        <label>
            <input
                name="method"
                required="true"
                type="radio"
                value="GET"
                onChange={onMethodChange}
                checked={method === this.value}
            />
        </label>
        <label>
            <input
                name="method"
                required="true"
                type="radio"
                value="POST"
                onChange={onMethodChange}
                checked={method === this.value}
            />
        </label>
        <label>
            <input
                name="method"
                required="true"
                type="radio"
                value="PUT"
                onChange={onMethodChange}
                checked={method === this.value}
            />
        </label><label>
            <input
                name="method"
                required="true"
                type="radio"
                value="PATCH"
                onChange={onMethodChange}
                checked={method === this.value}
            />
        </label>
        <label>
            <input
                name="method"
                required="true"
                type="radio"
                value="DELETE"
                onChange={onMethodChange}
                checked={method === this.value}
            />
        </label>
        <input
            name="body"
            type="text"
            value={body}
            onChange={onBodyChange}
        />
        <button aria-label="make-fetch">GO!</button>
    </form>
);

Controls.propTypes = {
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default Controls;