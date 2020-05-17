test('looping through properties of an object',()=>{
  const obj = {a:1, b:2, c:3};
  let props = []
  for (let prop in obj) {
    expect(typeof prop).toBe('string')
    props.push(prop)
  }
  expect(props).toStrictEqual(["a","b","c"])
})
