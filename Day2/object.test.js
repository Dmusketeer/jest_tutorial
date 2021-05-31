const obj=require('./object');

test('test for object',()=>{
    expect(obj()).toEqual({ name: "Dheeraj" });
    
});

test('test for object', () => {
    expect(obj()).toEqual({ name: "dheeraj" });

});