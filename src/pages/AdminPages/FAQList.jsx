import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, Navigate } from "react-router-dom";


const FAQList = () => {
    const [faq, setFAQ] = useState([]);
    
    useEffect(() => {
        getFAQ();
    }, []);
    
    const getFAQ = async () => {
        try {
            const response = await axios.get("http://localhost:3000/faq");
            setFAQ(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteFAQ = async (id) => {
        try {
          await axios.delete(`http://localhost:3000/faq/${id}`);
          getFAQ();
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
        <div>
            <div className="flex flex-col justify-center max-w-sm">
                <div className="flex flex-grow">
                    {/* <Link to={`addfaq`} className="w-20 h-8 m-5 flex items-center justify-center rounded-md text-white bg-green-500 hover:bg-green-400">
                        Add New
                    </Link> */}
                    <Link to={`admin`} className="w-20 h-8 m-5 flex items-center justify-center rounded-md text-white bg-green-500 hover:bg-green-400">
                        Menu
                    </Link>
                    <h2 className="text-2xl w-20 h-8 m-5">FAQ</h2>
                </div>
                <table className="min-w-full text-left text-sm font-light table-fixed">
                    <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                        <tr>
                            <th scope="col" className="px-6 py-4">NO</th>
                            <th scope="col" className="px-6 py-4">Nama</th>
                            <th scope="col" className="px-6 py-4">Deskripsi</th>
                        </tr>
                    </thead>
                    <tbody className="font-normal ">
                        {faq.map((faq, index) => {
                            return (
                                <tr key={faq.id} className="">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{ index + 1 }</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{ faq.nama }</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{ faq.deskripsi }</td>
                                    <th className="whitespace-nowrap px-6 py-4 font-medium">
                                        <div className="flex">
                                        <Link to={`editfaq/${faq.id}`} className="w-20 h-8 mr-2 flex items-center justify-center rounded-md text-white bg-green-500 hover:bg-green-400">Edit</Link>
                                        <button onClick={() => deleteFAQ(faq.id)} className="w-20 h-8 rounded-md text-white bg-red-500 hover:bg-red-400">Delete</button>
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

export default FAQList;