var config = require('config');
var phConfig = config.get('passhash');
var crypto = require('crypto'); // Cryptographic library

class EncryptionHelper {

     passHash(password,salt) {        
        var hash = crypto.createHmac(phConfig.hashAlgorithm, salt); /** Hashing algorithm sha512 */
        hash.update(password);
        var value = hash.digest('hex');
        return  value;
      };
      getSalt(){
        var salt = crypto.randomBytes(Math.ceil(phConfig.saltLength / 2))
        .toString('hex') /** convert to hexadecimal format */
        .slice(0, phConfig.saltLength);
        return salt;
      }

}

module.exports = new EncryptionHelper();