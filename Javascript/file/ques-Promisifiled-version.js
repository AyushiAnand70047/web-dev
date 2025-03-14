// Promisification => converting legacy callback code to support promise


const fs = require('fs')

function readFileWithPromise(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, content) => {
            if (err) {
                reject(err)
            } else {
                resolve(content)
            }
        })
    })
}

function writeFileWithPromise(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

function unlinkWithPromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

// Multiple Async code is running in sync fashion
readFileWithPromise('file1.txt', 'utf-8')
    .then(content => writeFileWithPromise('backup.txt', content))
    .then(() => unlinkWithPromise('file1.txt'))
    .catch((err) => console.log(err))

// async await increases the readability of code, await return when promise gets resolved
async function doTasks() {
    try {
        const fileContent = await readFileWithPromise('file1.txt', 'utf-8');
        await writeFileWithPromisewriteFileWithPromise('backup.txt', fileContent);
        await unlinkWithPromise('file1.txt');
    } catch (err) {
        console.log("Error: ", err)
    } finally {
        console.log("All done")
    }
}

// doTasks().then(() => console.log("All done"))