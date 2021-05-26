import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const Div = styled.div`
  background-color: ${({ theme, isGray }) => (isGray ? theme.gray50 : "white")};
`;

/**
 * a wrapper is simply a div element 
 */
const Wrapper = ({isGray,tailwind,className,children}) => {
    return (
        <Div 
        isGray={isGray}
        className={`${tailwind} ${className}`}>
            {children}
        </Div>
    );
};

Wrapper.propTypes = {
    
};

export default Wrapper;