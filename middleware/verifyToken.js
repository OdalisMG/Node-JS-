const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
 return new Promise((resolve, reject) => {
    const token= req.headers.authorization

    if (!token) {
        reject({
            status:401,
            message: 'Token de autenticacion no proporcionado'
        });
    }

    jwt.verify(
        token.split(" ")[1],
    "899e234041186352d65a212160eb1737b7e797d2250b80b232dfebc098edf278",
    (error,decodedToken)=>{
        if(error){
            reject({status:401, message: 'Token de autenticacion no valido'})
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
