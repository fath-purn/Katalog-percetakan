import React from "react";
import Navbar from "../components/Navbar";

function App() {
    const unPages ="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400";
    const pages = "text-neutral-800 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400";

    return (
        <div>
            <Navbar 
                dashboardStyle = {pages}
                teamStyle = {unPages}
                projectStyle = {unPages}
                FAQStyle = {unPages}
                blogStyle= {unPages}
            />
        </div>
    );
}

export default App;
