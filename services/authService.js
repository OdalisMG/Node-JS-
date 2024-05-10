const jwt =require('jsonwebtoken');


const JWT_SECRET =
"MIICWwIBAAKBgQCcqIrdeNxc+R25ao1ekl2P0iS6+Byg9lAvLGSiJc1wskw2Je3Q";


function generateToken(user){
    const payload={
        userId: user._id,
        email: user.email,
    };
    
    const token = jwt.sign(payload, JWT_SECRET,{expiresIn:"4h"});
    return token;
}

module.exports = {
    generateToken
} 