import Link from 'next/link';
import React from 'react'

// Images
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer__content">
                <ul>
                    <li>Finstreet 118 2561 Fintown</li>
                    <li>Hello@finsweet.com  020 7993 2905</li>
                </ul>
                <div>
                    <Link target='_blank' href={"https://www.facebook.com/"}><FaFacebook /></Link>
                    <Link target='_blank' href={"https://www.twitter.com/"}><FaTwitter /></Link>
                    <Link target='_blank' href={"https://www.instagram.com/"}><FaInstagram /></Link>
                    <Link target='_blank' href={"https://www.linkedin.com/"}><FaLinkedin /></Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer