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
const myExecutor = function (resolutionFunc, rejectionFunc){

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

const myPromise2 = function createPromise(callLog,resolveWith,rejectWith){

    const promiseShouldSucceed = (rejectWith === undefined)
    let resrej
    if (promiseShouldSucceed) {
        resrej = "Promise resolve: " + resolveWith
    }  else{
        resrej = "Promise reject: " + rejectWith
    }
    callLog.push(resrej)
    return new Promise((resolutionFunc, rejectionFunc) => {
        if (promiseShouldSucceed) {
            myAsynchronousFunction(callLog,resolveWith,resolutionFunc)
        }else {
            myAsynchronousFunction(callLog,resolveWith,rejectionFunc,resolveWith)
        }
    })
}
//const myPromise = new Promise(executor)
module.exports = {
    myAsynchronousFunction: myAsynchronousFunction,
    myExecutor: myExecutor,
    myPromise: myPromise
}