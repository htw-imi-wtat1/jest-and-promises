// https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Using_promises
"use strict";

const {myAsynchronousFunction, myPromise} = require("./myPromise" )
describe("chaining thens",()=>{
    let callLog

    beforeEach(() => {
        callLog = []
    })
    test('two',done => {
        expect.assertions(1);
    myPromise(callLog,'first thing')
        .then(data =>{
            return myPromise(callLog,'second Thing after '+data)
        })
        .then(data =>{
            expect(data)
                .toBe("(async function ok: second Thing after (async function ok: first thing))")
            done()
        })
    })
    test('two, callLog', async () => {
        expect.assertions(2);
        const result = await myPromise(callLog,'A')
            .then(data =>{
                callLog.push("first then")
                return myPromise(callLog,data + 'B')
            })
            .then(data =>{
                callLog.push("second then")
                return "(last then: "+data+")"
            })
        expect(result).toBe("(last then: (async function ok: (async function ok: A)B))")
        expect(callLog).toStrictEqual([
            "(async function ok: A)",
            "first then",
            "(async function ok: (async function ok: A)B)",
            "second then"
        ])
    })
})

