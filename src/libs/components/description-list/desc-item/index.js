import React from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'
import Wrapper from 'libs/components/wrapper'

import styled from 'styled-components'


const GrayDiv = styled.div`
    background-color: ${({ theme: { gray50, white }, isEven }) => isEven ? gray50 : white};
`

const DescItem = ({ padding, title, content, isEven, tailwind, className, children, horizontal }) => {
    return (
        <GrayDiv
            isEven={isEven}
            className={`${tailwind} ${className}`}>
            <Wrapper tailwind={`${!padding && 'p-4'}`}>
                {children ?
                    children
                    :
                    <Wrapper tailwind={`${horizontal ? 'grid grid-cols-5' : 'md:grid md:grid-cols-5'}`}>
                        <div className={`col-span-2 w-full`}>
                            <Text
                                type={`text-small`}
                                tailwind={`font-semibold`}>{title}</Text>
                        </div>

                        <div className={`w-full col-span-3`}> 

                            <Text
                                type={`text-small`}
                                tailwind={`text-gray-900`}>{content}</Text>
                        </div>
                    </Wrapper>
                }
            </Wrapper>

        </GrayDiv>
    );
};

const tailwindProps = {
    padding: false
}
DescItem.defaultProps = {
    ...tailwindProps,
    /** if set to true the item will not become vertical on mobile screens */
    horizontal: false
}

DescItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,

};

export default DescItem;