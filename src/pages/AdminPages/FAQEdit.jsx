import { useState, useEffect } from "react";
import {useNavigate, useParams, Navigate }  from "react-router-dom";
import axios from "axios";


import AdminInput from "../../components/AdminInput";
import AdminTextArea from "../../components/AdminTextArea";
import MyButton from "../../components/MyButton";

const FAQEdit = () => {
    const [nama, setNama] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");

    useEffect(() => {
        getFAQById();
    }, []);

    const getFAQById = async () => {
        const response = await axios.get(`http://localhost:3000/faq/${id}`);
        setNama(response.data.nama);
        setDeskripsi(response.data.deskripsi);
        setFile(response.data.image);
        setPreview(response.data.url);
    }

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const updateFAQ = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama", nama);
        formData.append("deskripsi", deskripsi);
        formData.append("file", file);
        try {
          await axios.patch(`http://localhost:3000/faq/${id}`, formData, {
            headers: {
                "Content-type": "multipart/form-data",
              },
          });
          navigate("/admin/faq");
        } catch (error) {
          console.log(error);
        }
      };
      
    const navigate = useNavigate();
    const { id } = useParams();


    // auth
    const [isLogged, setLogged] = useState(!!localStorage.getItem("token"));

    if (!isLogged) {
        return <Navigate to="/login" replace={true} />;
    }

    if(isLogged)
    return (
        <div className="flex flex-col px-[20%] my-5">
            <h2 className="text-4xl py-5 text-center">Edit FAQ</h2>
            <form onSubmit={updateFAQ}>
                <AdminInput 
                    value = {nama}
                    onChange = {(e) => setNama(e.target.value)}
                    placeholder = "Nama"
                    label = "Nama"
                />
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

export default FAQEdit;