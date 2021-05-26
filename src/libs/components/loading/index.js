import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit'

const Loading = ({ tailwind, className }) => {
    return (
        <div className={`w-full h-full flex  items-center justify-center ${tailwind} ${className}`}>
                <Spinner name="three-bounce" color="steelblue" />
               
        </div>
    );
};

Loading.propTypes = {

};

export default Loading;