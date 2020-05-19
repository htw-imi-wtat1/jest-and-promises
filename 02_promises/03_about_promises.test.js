// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
'use strict';

let callLog
const promise = async (x) => {
    callLog.push(`promise ${x}`)
    return `promise ${x}`
}

beforeEach(() => {
    callLog = []
})

test('using then, returning promise', () => {
    return promise('A')
        .then(result => {
            expect(result).toBe('promise A')
            expect(callLog).toStrictEqual(["promise A"])
        })
})

test('promise with other code after promise', done => {
    promise('A')
        .then(result => {
            expect(result).toBe('promise A')
            expect(callLog).toStrictEqual(["promise A","end of test"])
            done()
        })
    callLog.push("end of test")
})


test('using nested then', done => {
     promise('A')
        .then(result => {
            expect(result).toBe('promise A')
            expect(callLog).toStrictEqual(["promise A"])
            promise('B')
                .then(result => {
                    expect(result).toBe('promise B')
                    expect(callLog).toStrictEqual(["promise A", "promise B"])
                    done()
                })
        })
})

test('function is run to the end before promises are resolved', done => {
    promise('A')
        .then(result => {
            expect(result).toBe('promise A')
            promise('B')
                .then(result => {
                    expect(result).toBe('promise B')
                    expect(callLog).toStrictEqual(["promise A", 'end of test', "promise B"])
                    done()
                })
        })
    callLog.push('end of test')
})
