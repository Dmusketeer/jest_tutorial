const fetchData=require('./fData');
test("testing of the promise",async()=>{
    const data=await fetchData();
    expect(data).toBe('done');
})