// based on https://jestjs.io/docs/en/asynchronous
'use strict';

// using async is a simple way to define a promise!
const myPromise = async (x) => {
    return `promise ${x}`
}

test('if you forget to use the done callback the test always succeeds', () => {
    myPromise('A')
        .then((resolve,reject) => {
            expect(resolve).toStrictEqual('definitely not what promise returned ')
        })
})