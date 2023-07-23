import { useState, useEffect } from "react";
import { useNavigate, useParams, Navigate }  from "react-router-dom";
import axios from "axios";


import AdminInput from "../../components/AdminInput";
import AdminTextArea from "../../components/AdminTextArea";
import AdminInputImage from "../../components/AdminInputImage";
import MyButton from "../../components/MyButton";

const LayananEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [nama, setNama] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");

    useEffect(() => {
        getLayananById();
    }, []);

    const getLayananById = async () => {
        try {
            const response = await axios.get(`https://tough-teal-duck.cyclic.app/layanan/${id}`);
            const { nama, deskripsi, url } = response.data.data;
            setNama(nama);
            setDeskripsi(deskripsi);
            setPreview(url);
        } catch (error) {
            console.log(error);
        }
    }

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const updateLayanan = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", nama);
        formData.append("deskripsi", deskripsi);
        formData.append("url", preview);
        formData.append("image", file)
        try {
            await axios.patch(`https://tough-teal-duck.cyclic.app/layanan/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/admin/layanan");
        } catch (error) {
            console.log(error);
        }
    };
      
    
    // auth
    const [isLogged, setLogged] = useState(!!localStorage.getItem("token"));

    if (!isLogged) {
        return <Navigate to="/login" replace={true} />;
    }

    if(isLogged)
    return (
        <div className="flex flex-col px-[20%] my-5">
            <h2 className="text-4xl py-5 text-center">Edit Layanan</h2>
            <form onSubmit={updateLayanan}>
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
                <MyButton
                    keterangan = "submit"
                />
            </form>
        </div>
    )
}

export default LayananEdit;