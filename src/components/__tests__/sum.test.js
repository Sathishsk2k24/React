import sum from "../sampleSum"
test("checking sum function test cases",()=>{
    let result = sum(5,7);
    //Assertion
    expect(result).toBe(12);
})