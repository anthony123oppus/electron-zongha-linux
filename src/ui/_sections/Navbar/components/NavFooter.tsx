import styles from "../styles/Navbar.module.css"

const NavFooter = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.zongHa}>
            {/* FOR IMPLEMENTATION : */}
            <h5 className='text-[15px]'>
                Powered by
            </h5>
            <div className='text-[20px] indent-10'>
                zongHa Technology
            </div>
        </div>
        <div className={styles.link}>
        <a>Awwwards</a>
        <a>Instagram</a>
        <a>Dribble</a>
        <a>LinkedIn</a>
    </div>
    </footer>
  )
}

export default NavFooter