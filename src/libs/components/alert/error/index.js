import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'libs/components/alert'

const ErrorAlert = ({isShown,id,tailwind,fullScreen,showDismiss,aff,intl}) => {

    return (
        <div 
        className={isShown && `w-full ${fullScreen && 'h-full flex items-center px-12 justify-center'}`}
        >

        <Alert 
        id={id}
        showDismiss={showDismiss}
        tailwind ={tailwind}
        isShown={isShown}
        variant='error'
        title={aff ? intl.formatMessage({id: "generalErrorTitle"}) : 'Error'}
        content={aff ? intl.formatMessage({id: "generalError"}) : `Oops! something seems to have gone wrong, please try again.`}/>
        </div>
    );
};

ErrorAlert.defaultProps = {
    fullScreen: false,
    showDismiss: false,
}
ErrorAlert.propTypes = {
    isShown: PropTypes.bool
    
};

export default ErrorAlert