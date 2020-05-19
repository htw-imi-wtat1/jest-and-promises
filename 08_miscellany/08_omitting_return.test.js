
const l0 = ()=> 'a'
const l1 = ()=>{'a'}
const l2 = ()=>{return 'a'}
test('l0',()=>{
    expect(l0()).toBe('a')
})
test('l1',()=>{
    expect(l1()).toBe(undefined)
})
test('l2',()=>{
    expect(l2()).toBe('a')
})

function f1(){
    'a'
}
function f2(){
    return 'a'
}
test('f1',()=>{
    expect(f1()).toBe(undefined)
})
test('f2',()=>{
    expect(f2()).toBe('a')
})