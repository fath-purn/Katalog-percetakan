import { useState } from "react";
import {useNavigate, Navigate  }  from "react-router-dom";
import axios from "axios";
// import {Input, initTE} from "tw-elements";


import AdminInput from "../../components/AdminInput";
import AdminTextArea from "../../components/AdminTextArea";
import AdminInputImage from "../../components/AdminInputImage";
import MyButton from "../../components/MyButton";

const ProdukAdd = () => {
    const [nama, setNama] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [harga, setHarga] = useState();
    const [kategori, setKategori] = useState("");
    const [ulasan, setUlasan] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");

    // initTE({ Input });

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const saveProduk = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama", nama);
        formData.append("deskripsi", deskripsi);
        formData.append("harga", harga);
        formData.append("kategori", kategori);
        formData.append("ulasan", ulasan);
        formData.append("file", file);
        try {
          await axios.post("http://localhost:3000/products", formData, {
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

    // auth
    const [isLogged, setLogged] = useState(!!localStorage.getItem("token"));

    if (!isLogged) {
        return <Navigate to="/login" replace={true} />;
    }

    if(isLogged)
    return (
        <div className="flex flex-col px-[20%] my-5">
            <h2 className="text-4xl py-5 text-center">Tambah Produk</h2>
            <form onSubmit={saveProduk}>
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
                <MyButton keterangan="Save" />
                <MyButton keterangan="Back" />
            </form>
        </div>
    )
}

export default ProdukAdd;