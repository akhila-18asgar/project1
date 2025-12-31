import Style from './NavBar.module.css'

function NavBar(){
    return(
        <>
        <nav className={Style.navb}>
            <h1 className={Style.head}>My App</h1>
            <a>Home</a>
            <a>Pricing</a>
            <a>Contact</a>
        </nav>
        </>
    )
}
export default NavBar