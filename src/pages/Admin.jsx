import React, {useState, useEffect} from 'react'
import axios from 'axios';

import ProdukList from './AdminPages/ProdukList';

const Admin = () => {
    return (
        <div>
           <ProdukList />
        </div>
    )
}

export default Admin;