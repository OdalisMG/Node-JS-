const User = require('../models/User');


function getAllUsers(req, res) {  
    User.find()
      .then(users => res.status(200).json(users))
      .catch(err => {
        console.error(err);
        res.status(500).send("Error al obtener usuarios");
      });
  }


    function createUser(req,res){
        const {nombre,edad,email,contraseña}=req.body;
    User.create({nombre, edad, email, contraseña})
    .then((newUser)=>res.status(201).json(newUser))
    .catch((error)=>{
        console.error(error);
        res.status(500).send("Error al crear el usuario");   
    });
}   


function updatedUser(req, res) {
    const userId = req.params.id;
   
    const updatedUser = req.body;
       
    User.findByIdAndUpdate(userId, updatedUser, { new: true })
      .then((user) => res.status(200).json(user))
      .catch((err) => { 
        console.error(err);
        res.status(500).send("Error al actualizar el usuario");
      });
  }

  function deleteUser(req,res){
  const userId = req.params.id;
      
    User.findByIdAndDelete(userId)
    .then(()=> res.status(204).send("Usuario eliminado correctamente"))
    .catch((err) => {
        console.error(err);
        res.status(500).send("Error al eliminar el usuario");
      });
    
}
    
module.exports={    
    getAllUsers,
    createUser,
    updatedUser,
    deleteUser      
};