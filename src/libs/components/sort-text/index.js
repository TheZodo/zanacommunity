import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DownSVG } from 'images/chevron-down.svg'
import { ReactComponent as UpSVG } from 'images/chevron-up.svg'
import Text from 'libs/components/text'
import Icon from 'libs/components/icon'

const index = ({ sort, isAscending, onClick, children, tailwind, className }) => {
    return (

        <div
            onClick={onClick}
            className={`flex cursor-pointer items-center ${tailwind} ${className}`}>

            <Text
                color
                tailwind='font-medium text-gray-800'>{children}</Text>

            {sort &&


                <div className='px-2'>
                    {isAscending === true ?
                        <Icon
                            color
                            size='w-6 h-6'
                            hasBackground={false}
                            tailwind='text-gray-500'
                            src={<DownSVG />}
                        />

                        :

                        <Icon
                            color
                            size='w-6 h-6 '
                            hasBackground={false}
                            tailwind='text-gray-500'
                            src={<UpSVG />}
                        />
                    }

                </div>
            }

        </div>
    );
};

index.propTypes = {

};

export default index;