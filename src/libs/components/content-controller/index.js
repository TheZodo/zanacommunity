import React from 'react'
import PropTypes from 'prop-types'
import Loading from '../loading'
import ErrorAlert from '../alert/error'

/**
 * automatically controls showing of the error and loading and when querying data
 * from the server
 */
function ContentController({ data, loading, error, children }) {
    console.log({ data, loading, error })

    return (
        <div className='w-full h-full'>
            {
                loading ?
                    <div className='w-full h-full flex justify-center items-center'>
                        <Loading />
                    </div>
                    :
                    <>
                        {error &&
                            <div className=' flex w-full h-full justify-center items-center'>
                                <ErrorAlert
                                    isShown={error}
                                />
                            </div>
                        }


                        {data && children}

                    </>
            }
        </div>

    )
}

ContentController.propTypes = {

}

export default ContentController

