import React from "react";
import Image from 'next/image'
import logo from '../Images/footer/logo.png'
import Link from 'next/link'

const Header = () => {
    return (
        <div className = "header">
            <div className = "header_container">
                <Image src = {logo} width = {210} height = {70} />
                <div className = "header_btn">
                    <Link href = "/request_info"><a className = "header_more_info">Request More Information</a></Link>
                </div>
            </div>
        </div>
    );
}
export default Header;