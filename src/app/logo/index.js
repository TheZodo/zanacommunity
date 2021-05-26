import React from 'react'
import PropTypes from 'prop-types'
import LogoComponent from 'libs/components/logo'
import LogoPNG from 'images/zc.png'

function Logo({ showText = true }) {
    return (
        <LogoComponent
        showText={showText}
        color='text-red-400'
        icon={LogoPNG}
        text='ZanaCommunity'
    />
    )
}

Logo.propTypes = {
    
}

export default Logo

