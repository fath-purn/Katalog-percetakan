import { useState, useEffect } from "react";
import {useNavigate, useParams  }  from "react-router-dom";
import axios from "axios";
import {
  Input,
  initTE,
} from "tw-elements";


import AdminInput from "../../components/AdminInput";
import AdminTextArea from "../../components/AdminTextArea";
import AdminInputImage from "../../components/AdminInputImage";
import MyButton from "../../components/MyButton";

const ProdukEdit = () => {
    const [nama, setNama] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [harga, setHarga] = useState();
    const [kategori, setKategori] = useState("");
    const [ulasan, setUlasan] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");

    initTE({ Input });

    useEffect(() => {
        getProdukById();
    }, []);

    const getProdukById = async () => {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        setNama(response.data.nama);
        setDeskripsi(response.data.deskripsi);
        setHarga(response.data.harga);
        setKategori(response.data.kategori);
        setUlasan(response.data.ulasan);
        setFile(response.data.image);
        setPreview(response.data.url);
    }

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const updateProduk = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama", nama);
        formData.append("deskripsi", deskripsi);
        formData.append("harga", harga);
        formData.append("kategori", kategori);
        formData.append("ulasan", ulasan);
        formData.append("file", file);
        try {
          await axios.patch(`http://localhost:3000/products/${id}`, formData, {
            headers: {
                "Content-type": "multipart/form-data",
              },
          });
          navigate("/admin/produk");
        } catch (error) {
          console.log(error);
        }
      };
      
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div className="flex flex-col px-[20%] my-5">
            <h2 className="text-4xl py-5 text-center">Tambah Produk</h2>
            <form onSubmit={updateProduk}>
                <AdminInput 
                    value = {nama}
                    onChange = {(e) => setNama(e.target.value)}
                    placeholder = "Nama"
                    label = "Nama"
                />
                <AdminInputImage 
                    onChange = {loadImage}
                    placeholder = "Media"
                />
                {preview ? (
                    <figure className="w-52 h-auto my-5">
                        <img src={preview} alt="Preview Image" />
                    </figure>
                ) : (
                    ""
                )}
                <AdminTextArea 
                    value = {deskripsi}
                    onChange = {(e) => setDeskripsi(e.target.value)}
                    placeholder = "Deskripsi"
                    label = "Deskripsi"
                />
                <AdminInput 
                    value = {harga}
                    onChange = {(e) => setHarga(e.target.value)}
                    placeholder = "Harga"
                    label = "Harga"
                />
                <AdminInput 
                    value = {kategori}
                    onChange = {(e) => setKategori(e.target.value)}
                    placeholder = "Kategori"
                    label = "Kategori"
                />
                <AdminInput 
                    value = {ulasan}
                    onChange = {(e) => setUlasan(e.target.value)}
                    placeholder = "Ulasan"
                    label = "Ulasan"
                />
                <MyButton
                    keterangan = "submit"
                />
            </form>
        </div>
    )
}

export default ProdukEdit;