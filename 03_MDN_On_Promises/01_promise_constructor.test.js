const {myAsynchronousFunction, myPromise} = require("./myPromise" )
describe("test mock functions",()=>{
    let callLog

    beforeEach(() => {
        callLog = []
    })
    test('myAsynchronousFunction success',done => {
        myAsynchronousFunction(callLog,'a',asyncResult=>{
            callLog.push('in callback')
            expect(asyncResult).toBe("async function ok: a")
            expect(callLog).toStrictEqual([
                "async function ok: a",
                "in callback"
            ])
            done();
        })
    })
    test('myAsynchronousFunction failure',done => {
        expect.assertions(1);
        expect(() => {myAsynchronousFunction(callLog,'a',asyncResult=>{
            callLog.push('in callback')
        }, 'if this parameter is set it will throw an error')})
            .toThrow('async function error: a')
        done();
    })

    test('promise resolve',()=>{
        return myPromise(callLog,'A')
            .then(data => {
                expect(data).toBe('async function ok: A')
            })
    })
    test('promise reject',()=>{
        expect.assertions(1);
        return myPromise(callLog,'A','B')
            .catch(e => expect(e).toMatch('error'));
    })


})