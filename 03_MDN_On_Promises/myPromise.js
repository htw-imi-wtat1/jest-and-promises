// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Constructor

function myAsynchronousFunction(callLog, returnValue, callback, failWith) {
    if (failWith === undefined) {
        const result = `async function ok: ${returnValue}`
        callLog.push(result)
        setTimeout(callback(result), 0)
    } else {
        const result = `async function error: ${returnValue}`
        callLog.push(result)
        //setTimeout(() =>{ throw result }, 0)
        throw result
    }
}

const myPromise = function createPromise(callLog,resolveWith,rejectWith) {
    return new Promise((resolutionFunc, rejectionFunc) => {
        try {
            myAsynchronousFunction(callLog, resolveWith, (value) => {
                resolutionFunc(value)
            }, rejectWith)
        } catch (e) {
            rejectionFunc(e)
        }
    })
}

module.exports = {
    myAsynchronousFunction: myAsynchronousFunction,
    myPromise: myPromise
}