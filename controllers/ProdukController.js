import Produk from "../models/ProdukModels.js";

// untuk Read data
export const getProduk = async(req, res) => {
    try {
        const response = await Produk.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const getProdukById = async(req, res) => {
    try {
        const response = await Produk.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}



// untuk Create data
export const createProduk = async(req, res) => {
    try {
        await Produk.create(req.body);
        res.status(201).json({msg: "Produk Create"});
    } catch (error) {
        console.log(error.message);
    }
}

// untuk Update data 
export const updateProduk = async(req, res) => {
    try {
        await Produk.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.status(201).json({msg: "Produk Update"});
    } catch (error) {
        console.log(error.message);
    }
}


// untuk Delete data 
export const deleteProduk = async(req, res) => {
    try {
        await Produk.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(201).json({msg: "Delete Update"});
    } catch (error) {
        console.log(error.message);
    }
}