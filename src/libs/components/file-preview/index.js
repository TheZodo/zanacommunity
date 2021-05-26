import React from 'react'
import PropTypes from 'prop-types'
import Text from '../text'

function FilePreview({ files, large }) {
    return (
        <div className='w-full flex flex-wrap my-4 justify-center'>

            {files && files.map(file => {
                if (file) {
                    if (file.contentType === 'image/png' || file.contentType === 'image/jpeg') {
                        return <img src={file.file} className={`${large ? 'w-48 h-48' : 'w-32 h-32 '} m-2 rounded shodow-md border border-gray-100 `} />
                    } else {
                        return <div className={`${large ? 'w-48 h-48' : 'w-32 h-32 '} m-2 rounded shodow-md border border-gray-300 flex justify-center items-center`}>
                            <Text
                            color
                            tailwind='semi-bold text-gray-500'
                            >{file.file.name}</Text>

                        </div>
                    }
                }
            })
            }
        </div>
    )
}

FilePreview.propTypes = {

}

export default FilePreview

