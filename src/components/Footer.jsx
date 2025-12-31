import style from './Footer.module.css'

function Footer(){
    return(
        <div>
            <footer className={style.col}>
                <p className={style.foot}>© 2025 MyApp.All rights reserved</p>
            </footer>
        </div>
    );
}
export default Footer