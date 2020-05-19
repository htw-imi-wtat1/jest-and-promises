// https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Using_promises
"use strict";

const {myAsynchronousFunction, myPromise} = require("./myPromise" )
describe("chaining thens",()=>{
    let callLog

    beforeEach(() => {
        callLog = []
    })
    test('return from then is wrapped in a new promise',done => {
        expect.assertions(1);
    myPromise(callLog,'first thing')
        .then(data =>{
            return data+" something from then"
        })
        .then(data =>{
            expect(data)
                .toBe("(async function ok: first thing) something from then")
            done()
        })
    })
    test('you would need that for a new async call',done => {
        expect.assertions(1);
        myPromise(callLog,'A')
            .then(data =>{
                 return new Promise(((resolve, reject) => {
                     myAsynchronousFunction(callLog,data+' B',x=>{resolve(x)})
                 }))
            })
            .then(data =>{
                expect(data)
                    .toBe("(async function ok: (async function ok: A) B)")
                done()
            })
    })
})

