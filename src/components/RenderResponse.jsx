import React from 'react';
import PropTypes from 'prop-types';

const RenderResponse = ({ apiResponse }) => (
    <p>
        {JSON.stringify(apiResponse)}
    </p>
);

RenderResponse.propTypes = {
    apiResponse: PropTypes.array.isRequired,
}

export default RenderResponse;