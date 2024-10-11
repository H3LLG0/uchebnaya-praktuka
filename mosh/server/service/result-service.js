class ResultService {
    async plus(arg1, arg2) {
        const PlusEquals = await parseInt(arg1) + parseInt(arg2);
        console.log(PlusEquals)
        return PlusEquals;
    }
    async multiply(arg1, arg2) {
        const MultiplyEquals = await parseInt(arg1) * parseInt(arg2);
        console.log(MultiplyEquals)
        return MultiplyEquals;
    }
}

module.exports = new ResultService();