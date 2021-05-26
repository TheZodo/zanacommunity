import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from 'libs/components/text'

const Checkbox = ({onToggle, placeholder, className, tailwind, label,value,showError}) => {
    const [isActive, setIsActive] = useState(value)


    return (
        <div>
        <div className='flex items-center'>
           
            <input
            checked={isActive}
            onClick={() => {
                onToggle && onToggle(!isActive)
                setIsActive(!isActive)
            }}
                className={`cursor-pointer form-checkbox h-4 w-4 text-indigo-600
                 transition duration-150 ease-in-out ${tailwind} ${className}`}
                type='checkbox'
                placeholder={placeholder} />


                 <label className="ml-2 block text-sm leading-5 text-gray-900">
                {label}
            </label>
        </div>
        
        {showError &&
        <Text 
        type='text-small'
        tailwind='text-red-400'>
           Read and accept the terms.
            </Text>}

        </div>
    )

};

const tailwindProps = {
focus:false,
}

Checkbox.defaultProps = {
    ...tailwindProps,
}

export const proptypes = {
    label: PropTypes.string,
};

Checkbox.propTypes = proptypes;

export default Checkbox;