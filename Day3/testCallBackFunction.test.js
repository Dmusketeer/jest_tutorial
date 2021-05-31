const callback=require('./testCallBackFunction');
test("testing of callBack function",(done)=>{
    function clback(dt){
        try{
            expect(dt).toBe("hey Dheeraj");
            done();
        }
        catch(error){
            done(error);
        }
    }
    callback(clback);
});