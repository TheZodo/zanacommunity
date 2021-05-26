

const processFileUpload = async ({ file, onUpdateDb }) => {
    const { _, createReadStream } = await file;
    let data = ''


    Promise.all(await new Promise((resolve, reject) => {
        createReadStream()
            .setEncoding('binary')
            .on('data', chunk => {
                data += chunk
            })
            .on('error', (error) => {
                resolve()
            })
            .on('end', async () => {

                Buffer.from(data, 'binary')
                const base64data = Buffer.from(data, 'binary').toString('base64')

                await onUpdateDb({ data: base64data })

                resolve()

            })
    })
    )
}

module.exports = {
    processFileUpload
}