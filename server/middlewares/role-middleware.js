const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(roles) {
    return function(req, res, next) {
        if(req.method === 'OPTIONS') {
            next()
        }
    
        try {
            const token = req.headers.authorization.split(' ')[1];
            if(!token) {
                return res.status(403).json({message:"У вас нет прав"});
            }
           const user = jwt.verify(token, process.env.JWT_SECRET);
           let hasRole = false;
           roles.forEach(Element => {
                if(Element.includes(user.role)) {
                    hasRole = true;
                }  
           });
           if (!hasRole) {
                return res.status(403).json({message:"пользователь не авторизован"});
           }
            next();
        } catch (e) {
            console.log(e);
            return res.status(403).json({message:"У вас нет прав"});
        }
    }
}