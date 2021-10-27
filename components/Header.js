import React from "react";
import Image from 'next/image'
import logo from '../Images/footer/logo.png'
const Header = () => {
    return (
        <div className = "header">
            <Image src = {logo} width = {210} height = {70} />
        </div>
    );
}
export default Header;