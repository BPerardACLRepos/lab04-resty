import React from 'react';
import PropTypes from 'prop-types';

const RenderHistory = ({ history }) => (
    <div>
        <h2>HISTORY</h2>
        <p aria-label="history">
            {JSON.stringify(history)}
        </p>
    </div>
);

RenderHistory.propTypes = {
    history: PropTypes.array.isRequired,
}

export default RenderHistory;