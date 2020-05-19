const myPromise = async (x) => {
    return `promise ${x}`
}

test('using the done callback, the error is detected', done => {
    myPromise('B')
        .then((resolve, reject) => {
            expect(resolve).toBe('definitely not what promise returned ')
            done()
        })
})