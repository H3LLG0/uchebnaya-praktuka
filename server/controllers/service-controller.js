const ServiceService = require('../service/service-service');

class ServiceController {
    async ReadService(req, res, next) {
        try {
            const services = await ServiceService.GetAllService();

            res.json(await services);
        } catch (e) {
            console.log(e);
        }
    }
    async CreateSrvice(req, res, next) {
        try {

        } catch (e) {

        }
    }
    async UpdateService(req, res, next) {
        try {

        } catch (e) {

        }
    }
    async DeleteService(req, res, next) {
        try {

        } catch (e) {

        }
    }

}

module.exports = new ServiceController();