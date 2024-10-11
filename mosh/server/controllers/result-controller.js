const ResultService = require('../service/result-service')

class ResultController {
    async resultPlus(req, res, next) {
        try {
            const argOne = req.body.argOne;
            const argTwo = req.body.argTwo;
            console.log(argOne, argTwo)
            const plus = await ResultService.plus(argOne, argTwo);

            return res.json({'result': `${plus}`});

        } catch(e) {
            console.log(e);
        }
    }
    async resultMultiply (req, res, next) {

        const argOne = req.body.argOne;
        const argTwo = req.body.argTwo;
        console.log(argOne, argTwo)
        const multiply = await ResultService.multiply(argOne, argTwo);
        
        return res.json({'result': `${multiply}`});
    }
}

module.exports = new ResultController();