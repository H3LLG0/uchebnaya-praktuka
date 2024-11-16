const bcrypt = require('bcrypt');

class CryptService {
    async Crypt(password) {
        const salt = await bcrypt.genSaltSync(10)
        const hash_password = await bcrypt.hashSync(password, salt);

        return hash_password;
    }
    async Decrypt(password, hash_password) {
        const decrypt = await bcrypt.compare(password, hash_password, function(err, result) {
            return result;
        });
        console.log( decrypt)
        return decrypt;
    }

}

module.exports = new CryptService;