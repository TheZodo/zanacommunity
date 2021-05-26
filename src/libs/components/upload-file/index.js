import React from 'react'
import PropTypes from 'prop-types'
import FileResizer from 'react-image-file-resizer';

/**
 * 
 *TODO SET A LIMIT ON THE FILE SIZE
 */
function UploadFile({ multiple, onChange, id,img }) {

    const resizeFile = (file) =>
        new Promise((resolve) => {
            FileResizer.imageFileResizer(
                file,
                300,
                400,
                "JPEG",
                80,
                0,
                (uri) => {
                    resolve(uri);
                },
                "base64"
            );
        });

    return (
        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div class="space-y-1 text-center">
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="flex text-sm text-gray-600 justify-center">
                    <label for={id} class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>{multiple ? 'Upload files' : 'Upload a file'}</span>
                        <input
                            multiple={multiple}
                            onChange={async (e) => {
                                const filelist = Array.from(e.target.files)
                                const files = []


                                await Promise.all(filelist.map(async (file) => {
                                    let compressedFile

                                    if (file.type ===  'image/png' || file.contentType === 'image/jpeg') {
                                        compressedFile = await resizeFile(file)
                                    } else {
                                        compressedFile = file
                                    }

                                    files.push({
                                        file: compressedFile,
                                        contentType: file.type
                                    })
                                }))

                                onChange(files)
                            }}
                            id={id} name={id}
                            type="file"
                            class="sr-only"
                            accept={img ? "image/png, image/jpeg" : "*"} />
                    </label>
                    {/** <p class="pl-1">or drag and drop</p> */}
                </div>
                <p class="text-xs text-gray-500">
                    {img ? 'PNG, JPG up to 5MB' : 'File size up to 5MB'}
                </p>
            </div>
        </div>
    )
}

UploadFile.defaultProps = {
    id: 'file-upload'
}

UploadFile.propTypes = {

}

export default UploadFile
