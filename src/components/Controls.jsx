import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
    url,
    method,
    body,
    onChange,
    handleSubmit,
}) => (
    <form onSubmit={handleSubmit}>
        <div>
            URL<input
                aria-label="user-input"
                name="url"
                required={true}
                type="url"
                value={url}
                onChange={onChange}
            />
        </div>
        <div>
            <label>
                <input
                    aria-label="get"
                    name="method"
                    required={true}
                    type="radio"
                    value="GET"
                    onChange={onChange}
                    checked={method === 'GET'}
                />
                GET
            </label>
            <label>
                <input
                    aria-label="post"
                    name="method"
                    required={true}
                    type="radio"
                    value="POST"
                    onChange={onChange}
                    checked={method === 'POST'}
                />
                POST
            </label>
            <label>
                <input
                    aria-label="put"
                    name="method"
                    required={true}
                    type="radio"
                    value="PUT"
                    onChange={onChange}
                    checked={method === 'PUT'}
                />
                PUT
            </label>
            <label>
                <input
                    aria-label="patch"
                    name="method"
                    required={true}
                    type="radio"
                    value="PATCH"
                    onChange={onChange}
                    checked={method === 'PATCH'}
                />
                PATCH
            </label>
            <label>
                <input
                    aria-label="delete"
                    name="method"
                    required={true}
                    type="radio"
                    value="DELETE"
                    onChange={onChange}
                    checked={method === 'DELETE'}
                />
                DELETE
            </label>
        </div>
        <div>
            Body<input
                aria-label="body"
                name="body"
                type="text"
                value={body}
                onChange={onChange}
            />
        </div>
        <button aria-label="make-fetch">GO!</button>
    </form>
);

Controls.propTypes = {
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Controls;