function mathAbs(numb){
    return Math.abs(numb)
}




describe('Unit test. Test Abs', () => {

    it('Unit 001. Abs > 0' , () => {
        expect(mathAbs(10)).to.equal(10)
    })

    it('Unit 002. Abs < 0' , () => {
        expect(mathAbs(-10)).to.equal(10)
    })
    
    it('Unit 003. Abs = 0' , () => {
        expect(mathAbs(0)).to.equal(0)
    })
})