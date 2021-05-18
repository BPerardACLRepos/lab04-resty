import React from 'react';
import PropTypes from 'prop-types';

const RenderHistory = ({ history }) => (
    <p>
        {JSON.stringify(history)}
    </p>
);

RenderHistory.propTypes = {
    history: PropTypes.array.isRequired,
}

export default RenderHistory;