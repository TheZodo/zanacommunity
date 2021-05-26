import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import {ReactComponent as DismissSVG} from './images/dismiss.svg'
import {useFadeAnimParent} from 'hooks/useFadeAnim';
import Content from './content'

const Banner = (props) => {
    const { isShown } = props

    const { render, stopRender } = useFadeAnimParent(isShown);

    return (
        render &&
        <Content
            stopRender={stopRender}
            {...props}
            className={props.className}
        />
    );
};

Banner.defaultProps = {
    showDismiss: false,
    isShown: false,
    narrow:false,
}
Banner.propTypes = {
    onButtonClick: PropTypes.func,
    buttonText: PropTypes.string,
    text: PropTypes.string,
     onCloseComplete: PropTypes.func,
};

export default Banner;