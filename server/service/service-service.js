const connection = require('../database/database');

class ServiceService {
    async GetAllService() {
        let services = connection.query('SELECT * FROM services')
        .then(([rows, fields]) =>{
            return rows;
          })
          .catch(err =>{
            console.log(err);
          });
      
          return await services;
    }

}

module.exports = new ServiceService();