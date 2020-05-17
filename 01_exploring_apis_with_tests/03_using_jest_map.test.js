const obj = {a:1, b:2, c:3};

test('looping through properties of an object',()=>{
    let props = []
  for (let prop in obj) {
    expect(typeof prop).toBe('string')
    props.push(prop)
  }
  expect(props).toStrictEqual(["a","b","c"])
})

test("Object.keys returns an array of the object's keys",()=>{
  const props = Object.keys(obj)
  expect(props).toStrictEqual(["a","b","c"])
})

test('mapping of object keys',()=>{
  const props = Object.keys(obj).map( prop =>{
    return `${prop} is ${obj[prop]}`
  })
  expect(props).toStrictEqual(["a is 1","b is 2","c is 3"])
})
