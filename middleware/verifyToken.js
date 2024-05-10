const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
 return new Promise((resolve, reject) => {
    const token= req.headers.authorization

    if (!token) {
        reject({
            status:400,
            message: 'Token de autenticacion no proporcionado'
        });
    }

    jwt.verify(
        token.split(" ")[1],
    "MIICWwIBAAKBgQCcqIrdeNxc+R25ao1ekl2P0iS6+Byg9lAvLGSiJc1wskw2Je3Q",
    (error,decodedToken)=>{
        if(error){
            reject({status:400, message: 'Token de autenticacion no valido'})
        }else{
            req.userId = decodedToken.userId
            resolve()
        }
      } 
    );
  })
  .then(()=> next())
  .catch((error)=>
    res.status(error.status || 500).json({message: error.message})
);
}

module.exports = verifyToken;
