const crypto= require('crypto');

const secret = crypto.randomBytes(32).toString('hex');

console.log(secret); //Imprimimos contraseña MIICWwIBAAKBgQCcqIrdeNxc+R25ao1ekl2P0iS6+Byg9lAvLGSiJc1wskw2Je3Q
