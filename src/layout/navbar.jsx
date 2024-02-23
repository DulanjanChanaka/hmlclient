import React, { useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TableRowsIcon from '@mui/icons-material/TableRows';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const loaction = useLocation();
    const [menuSelect, setMenuSelect] = useState("/")

    useEffect(() => {
        setMenuSelect(loaction.pathname)

    }, [loaction])
    return (
        <div className=' '>
            <div className='w-full bottom-0 left-0 fixed flex py-5  px-3 justify-between bg-blue-400 rounded-t-lg'>

                <Link to="/" >
                    <div className='flex flex-col items-center' style={{color: menuSelect === "/"? "white" : ""}}>
                        <div><HomeIcon /></div>
                        <div className='text-sm font-medium'>HOME</div>
                    </div>
                </Link>

                <Link to="/shop">
                    <div className='flex flex-col items-center' style={{
                        color: menuSelect === "/shop"? "white" : ""
                    }}>
                        <div className=''><StorefrontIcon /></div>
                        <div className='text-sm font-medium'>SHOP</div>
                    </div>
                </Link>

                <Link to= "/product" >
                    <div className='flex flex-col items-center' style={{
                        color: menuSelect === "/product"? "white" : ""
                    }}>
                        <div><TableRowsIcon /></div>
                        <div className='text-sm font-medium'>PRODUCT</div>
                    </div>
                </Link>

                <Link to="/about" >
                    <div className='flex flex-col items-center' style={{
                        color: menuSelect === "/about"? "white" : ""
                    }}>
                        <div><PersonIcon /></div>
                        <div className='text-sm font-medium'>ABOUT</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar