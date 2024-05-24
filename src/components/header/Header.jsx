"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

// Images
import SiteLogo from '@/assets/icons/site-logo.svg'
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
    const [menu, setMenu] = useState(false)
    return (
        <header>
            <div className="container">
                <div className="header__content">
                    <Link href={"/"}>
                        <Image src={SiteLogo} alt='site logo' width={140} height={28.35} />
                    </Link>
                    <div>
                        <ul className={menu ? "show" : ""}>
                            <Link href={"/"}>Home</Link>
                            <Link href={"/blog"}>Blog</Link>
                            <Link href={"/aboutus"}>About Us</Link>
                            <Link href={"/category"}>Category</Link>
                            <Link href={"/register"}>Register</Link>
                        </ul>
                        <button>Login</button>
                        <button onClick={() => setMenu(p => !p)} className="menu-btn">
                            <MdOutlineMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header