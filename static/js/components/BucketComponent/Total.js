import React from 'react';
import PropTypes from 'prop-types';

const TotalCost = ({ total }) => {
   
    return (
        <div className="total">{'TOTAL: $' + total}</div>
    );
};

TotalCost.propTypes = {
    total: PropTypes.number.isRequired,
}

export default TotalCost;