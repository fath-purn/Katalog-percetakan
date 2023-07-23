import { Link } from "react-router-dom";
export default function AdminHeader (props) {
    return (
        <div className="flex flex-grow">
            <Link to={`${props.to1}`} className="w-20 h-8 m-5 text-xs flex items-center justify-center rounded-md text-white bg-green-500 hover:bg-green-400">
                Add New
            </Link>
            <Link to={`/admin`} className="w-20 h-8 m-5 text-xs flex items-center justify-center rounded-md text-white bg-green-500 hover:bg-green-400">
                Menu
            </Link>
            <h2 className="text-2xl w-20 h-8 m-5">{props.keterangan}</h2>
        </div>
    )
}