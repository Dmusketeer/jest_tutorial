const obj=require('./object');

// first test case
test('test for object',()=>{
    expect(obj()).toEqual({ name: "Dheeraj" });
    
});
// second test case

test('test for object', () => {
    expect(obj()).toEqual({ name: "dheeraj" });

});