import React from 'react';
import styled from 'styled-components'
import Wrapper from 'libs/components/wrapper'

const GrayWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.gray50};
`

const GrayDiv = ({ children, id ,tailwind,className}) => {
    return (
        <GrayWrapper 
        className={className}
        tailwind={tailwind}
        id={id}>
            {children}
        </GrayWrapper>
    );
};

export default GrayDiv;