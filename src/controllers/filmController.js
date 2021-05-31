const{film} = require('../models/')

module.exports={
    getAllFilm :(req, res)=>{
        film.findAll()
        
        .then((data)=>{
            res.status(200).send({
                message : "get all film success",
                status : 200,
                data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message: "get all data is error",
                status: 500,
                error
            })
        })
    },
    createNewFilm : (req, res)=>{
        const{body} = req;

        film.create(body)
        .then((data)=>{
            res.status(200).send({
                msg: "create film success",
                status: 200,
                data
            })
        })
        .catch((error)=>{
            res.status(500).send({
                msg: "create film error",
                status: 500,
                error
            })
        })
    },
    getFilmbyId: (req,res)=>{
        const id = req.params.id;
        film.findAll({
            where:{
                id
            }
        })
        .then((data) => {
            res.status(200).send({
                msg: "get id data makanan is success",
                status: 200,
                data
            })
        })
        .catch((error)=> {
            res.status(500).send({
                msg:"get data id is error",
                status: 500,
                error
            })
        })
    },
    deleteFilmbyId : async (req,res) => {
        const {id} = req.params;

        let findfilm = await film.findOne({
            where : {
                id
            }
        });

        if(findfilm === null){
            res.status(404).send({
                msg: "delete film is error",
                status: 404,
                error: "data is not found"
            })
        }
        film.destroy({
            where:({
                id
            })
        })
        .then((data) => {
            const resObject = {...findfilm.dataValues}

            res.status(200).send({
                msg : "Delete data film is success",
                status : 200,
                data : resObject
            })
        })
        .catch ((error) => {
            res.status(500).send({
                msg: "delete data film is error",
                status: 500,
                error
            })

        })

    },

    updatefilm : async (req,res) => {
        const {id} = req.params;
        const {body} = req
        
        let findfilm = await film.findOne({
            where: {
                id 
            }
        });

        if(findfilm === null){
            res.status(404).send({
                msg : "update student is error",
                status : 404,
                error : "data is not found"
            })
        }

        film.update (body,{
            where:{
                id
            }
        })
        .then ((data) => {
            const resObject = {...findfilm.dataValues, ...body}

            res.status(200).send({
                msg:"update data film is success",
                status: 200,
                data: resObject
            })
        })
        .catch ((error) => {
            res.status(500).send({
                msg: "update data is error",
                status: 500,
                error
            })
        })
    },

}