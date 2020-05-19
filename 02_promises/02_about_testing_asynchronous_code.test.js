// based on https://jestjs.io/docs/en/asynchronous
'use strict';

// using async is a simple way to define a promise!
async function myPromise (x) {
    return `promise ${x}`
}


test("and here's the complete test", done => {
    myPromise('C')
        .then((resolve, reject) => {
            expect(resolve).toBe('promise C')
            done()
        })
})


test("alternatively, you can return the promise", () => {
    return myPromise('D')
        .then((resolve, reject) => {
            expect(resolve).toBe('promise D')
        })
})

test("this can be shortened with resolves", () => {
    return expect(myPromise('E')).resolves.toBe("promise E")
})
