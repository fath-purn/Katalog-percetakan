import { useState } from "react";
import {useNavigate  }  from "react-router-dom";
import axios from "axios";


import AdminInput from "../../components/AdminInput";
import AdminTextArea from "../../components/AdminTextArea";
import AdminInputImage from "../../components/AdminInputImage";
import MyButton from "../../components/MyButton";

const LayananAdd = () => {
    const [nama, setNama] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");

    // initTE({ Input });

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const saveLayanan = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama", nama);
        formData.append("deskripsi", deskripsi);
        formData.append("file", file);
        try {
          await axios.post("http://localhost:3000/layanan", formData, {
            headers: {
                "Content-type": "multipart/form-data",
            },
          });
          navigate("/admin/layanan");
        } catch (error) {
          console.log(error);
        }
      };
    
    const navigate = useNavigate();

    return (
        <div className="flex flex-col px-[20%] my-5">
            <h2 className="text-4xl py-5 text-center">Tambah Layanan</h2>
            <form onSubmit={saveLayanan}>
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
                <MyButton keterangan="Save" />
            </form>
        </div>
    )
}

export default LayananAdd;