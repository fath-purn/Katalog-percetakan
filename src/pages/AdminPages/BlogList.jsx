import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

import AdminHeader from "../../components/AdminHeader";

const BlogList = () => {
    const [blog, setBlog] = useState([]);
    
    useEffect(() => {
        getBlog();
    }, []);
    
    const getBlog = async () => {
        try {
            const response = await axios.get("http://localhost:3000/blog");
            setBlog(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteBlog = async (id) => {
        try {
          await axios.delete(`http://localhost:3000/blog/${id}`);
          getBlog();
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <div>
            <div className="flex flex-col justify-center">
                <AdminHeader to1="addblog" keterangan="Blog"/>
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
                        {blog.map((blog, index) => {
                            return (
                                <tr key={blog.id} className="">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{ index + 1 }</td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{ blog.nama }</td>
                                    <td>
                                        <figure className="w-40 h-auto ease-in-out duration-300 hover:w-96 hover:z-10 hover:absolute">
                                            <img src={blog.url} alt="Image" />
                                        </figure>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{ blog.deskripsi }</td>
                                    <th className="whitespace-nowrap px-6 py-4 font-medium">
                                        <div className="flex">
                                        <Link to={`editblog/${blog.id}`} className="w-20 h-8 mr-2 flex items-center justify-center rounded-md text-white bg-green-500 hover:bg-green-400">Edit</Link>
                                        <button onClick={() => deleteBlog(blog.id)} className="w-20 h-8 rounded-md text-white bg-red-500 hover:bg-red-400">Delete</button>
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

export default BlogList;