const fetchData=require('./fData');
const common=require('./common');

beforeEach(()=>{
    console.warn(common());
})
test("what is beforeEach",()=>{
    expect(fetchData()).toBe('done');
})

test("what is beforeEach", () => {
    expect(fetchData()).toBe('done');
})