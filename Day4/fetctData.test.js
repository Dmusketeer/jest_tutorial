const fetchData=require('./fetctData');
test("testing of the promise",()=>{
    return fetchData().then((data)=>{
        expect(data).toBe("this is the resolve ")
    })
})