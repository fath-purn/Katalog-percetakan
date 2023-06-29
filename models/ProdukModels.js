import {Sequelize} from "sequelize";
import db from '../config/db.js';

const {DataTypes} = Sequelize;

const Produk = db.define('produk', {
    nama: DataTypes.STRING,
    media: DataTypes.BLOB,
    deskripsi: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    kategori: DataTypes.STRING,
    ulasan: DataTypes.STRING,
});

export default Produk;

(async() =>{
    await db.sync();
}) ();