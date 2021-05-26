import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Card from '../card';


const Wrapper = styled(Card)`
  min-width: 28rem;
`;

function CardWrapper({ children, tailwind, className }) {
    return (
        <Wrapper
            className={className}
            tailwind={tailwind}>

            {children}
        </Wrapper>
    )
}

CardWrapper.propTypes = {

}

export default CardWrapper

