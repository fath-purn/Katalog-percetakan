import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";


const LayananList = () => {
    const [layanan, setLayanan] = useState([]);
    
    useEffect(() => {
        getLayanan();
    }, []);
    
    const getLayanan = async () => {
        try {
            const response = await axios.get("http://localhost:3000/layanan");
            setLayanan(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteLayanan = async (id) => {
        try {
          await axios.delete(`http://localhost:3000/layanan/${id}`);
          getLayanan();
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <div>
            <div className="flex flex-col justify-center">
                <Link to={`addlayanan`} className="w-20 h-8 m-5 flex items-center justify-center rounded-md text-white bg-green-500 hover:bg-green-400">
                    Add New
                </Link>
                <table className="min-w-full text-left text-sm font-light table-fixed">
                    <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                        <tr>
                            <th scope="col" className="px-6 py-4">NO</th>
                            <th scope="col" className="px-6 py-4">Nama</th>
                            <th scope="col" className="px-6 py-4">Media</th>
                            <th scope="col" className="px-6 py-4">Deskripsi</th>
                        </tr>
                    </thead>
                    <tbody className="font-normal ">
                        {layanan.map((layanan, index) => {
                            return (
                                <tr key={layanan.id} className="">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{ index + 1 }</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{ layanan.nama }</td>
                                    <td>
                                        <figure className="w-40 h-auto ease-in-out duration-300 hover:w-96 hover:z-10 hover:absolute">
                                            <img src={layanan.url} alt="Image" />
                                        </figure>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{ layanan.deskripsi }</td>
                                    <th className="whitespace-nowrap px-6 py-4 font-medium">
                                        <div className="flex">
                                        <Link to={`editlayanan/${layanan.id}`} className="w-20 h-8 mr-2 flex items-center justify-center rounded-md text-white bg-green-500 hover:bg-green-400">Edit</Link>
                                        <button onClick={() => deleteLayanan(layanan.id)} className="w-20 h-8 rounded-md text-white bg-red-500 hover:bg-red-400">Delete</button>
                                        </div>
                                    </th>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LayananList;