import React from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text';
import Card from 'libs/components/card';
import { ReactComponent as ArrowUpSVG } from './images/arrowup.svg'
import { ReactComponent as ArrowDownSVG } from './images/arrowdown.svg'
import Badge from 'libs/components/badge';
import Icon from 'libs/components/icon';
import Button from 'libs/components/button';

const Stat = ({ title, value, icon, badgeText, positive, onViewAll, showViewAll, centerValue }) => {
    return (
        <Card tailwind=' justify-center flex flex-col w-full'>

            <div className='flex p-4 pb-0'>
                {icon &&
                    <Icon
                        bg
                        color
                        size
                        rounded
                        src={icon}
                        tailwind={` bg-indigo-600 text-white h-12 w-12 p-2 rounded-md`}
                        round={false}
                    />
                }

                <div className=' ml-2 mb-4 '>
                    <Text type='text-small'>{title}</Text>
                    <div className='flex items-center '>
                        <Text type={`heading-small`}
                        tailwind={`${centerValue && 'w-full text-center'}`}
                        >{value}</Text>

                        {badgeText &&
                            <Badge
                                tailwind='ml-4 '
                                hasBackground={false}
                                leadingIcon={positive ? <ArrowUpSVG /> : <ArrowDownSVG />}
                                variant={positive ? 'green' : 'red'}>

                                {badgeText}
                            </Badge>
                        }
                    </div>
                </div>
            </div>

            {showViewAll &&
                <div className='rounded-b-lg w-full bg-gray-100'>
                    <Button
                        size='extra-small'
                        tailwind='text-indigo-600 hover:text-indigo-500'
                        color
                        hover
                        onClick={onViewAll}
                        variant='text'>View all</Button>
                </div>
            }

        </Card>
    );
};

Stat.defaultProps = {
    showViewAll: true,
    centerValue: false,
}

Stat.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.object,
    badgeText: PropTypes.object,
    badgePositive: PropTypes.bool,
    onViewAll: PropTypes.func,
};

export default Stat;