import React from 'react';
import PropTypes from 'prop-types';

const RenderResponse = ({ apiResponse }) => (
    <div>
        <h1>RESPONSE</h1>
        <p aria-label="response">
            {JSON.stringify(apiResponse)}
        </p>
    </div>
);

RenderResponse.propTypes = {
    apiResponse: PropTypes.array.isRequired,
}

export default RenderResponse;