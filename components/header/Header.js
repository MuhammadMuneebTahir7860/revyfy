import React from 'react';
import styles from '../../styles/Header.module.scss';
import logo from '../../public/revyfy-logo-pink.png';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaBars } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div className={styles.fixedHeaderContainer}>
            <div className={styles.headerContainer}>
                <div onClick={toggleDrawer} className={styles.barIconContainer}>
                    <FaBars size={25} />
                </div>
                <div className={styles.socialLinksRow}>
                    <div className={styles.socialContainer}>
                        <FaFacebook className={styles.socialIcon} size={25} />
                        Facebook
                    </div>
                    <div className={styles.socialContainer}>
                        <FaInstagram className={styles.socialIcon} size={25} />
                        Instagram
                    </div>
                </div>
                <div className={styles.logo} >
                    <Image className={styles.logo} src={logo} alt="logo" />
                </div>
                <div className={styles.btnAndNumberRow}>
                    <button className={styles.bookDemoBtn}>Book Demo</button>
                    <a href='tel:5551234567' className={styles.number}><BsFillTelephoneFill className={styles.phoneIcon} /> 01522 887200</a>
                </div>
            </div>
            <div className={styles.navLinksRow}>
                <p className={styles.navLink}>Intro</p>
                <p className={styles.navLink}>Features </p>
                <p className={styles.navLink}>Industries </p>
                <p className={styles.navLink}>Demo video </p>
                <p className={styles.navLink}>Pricing </p>
                <p className={styles.navLink}>Testimonials</p>
                <p className={styles.navLink}>Faq</p>
                <p className={styles.navLink}>Support and contact </p>
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='drawer'
            >
                <div className={styles.drawerContainer}>
                    <MdClose onClick={toggleDrawer} size={30} className={styles.closeIcon} />
                    <div className={styles.divider} />
                    <p className={styles.drawerNavLink}>Intro</p>
                    <div className={styles.divider} />
                    <p className={styles.drawerNavLink}>Features </p>
                    <div className={styles.divider} />
                    <p className={styles.drawerNavLink}>Industries </p>
                    <div className={styles.divider} />
                    <p className={styles.drawerNavLink}>Demo video </p>
                    <div className={styles.divider} />
                    <p className={styles.drawerNavLink}>Pricing </p>
                    <div className={styles.divider} />
                    <p className={styles.drawerNavLink}>Testimonials</p>
                    <div className={styles.divider} />
                    <p className={styles.drawerNavLink}>Faq</p>
                    <div className={styles.divider} />
                    <p className={styles.drawerNavLink}>Support and contact </p>
                    <div className={styles.divider} />
                    <FaFacebook color='white' className={styles.drawerSocialIcon} size={25} />
                    <FaInstagram color='white' className={styles.drawerSocialIcon} size={25} />
                    <div className={styles.divider} />
                    <a href='tel:5551234567' className={styles.number}><BsFillTelephoneFill className={styles.phoneIcon} color='white' />  01522 887200</a>
                </div>
            </Drawer>
        </div>
    )
}
