import style from './Description.module.css'

function Description(){
    return(
        <div className={style.bg}>
        <h1 className={style.head}>Simple and Affordable Pricing</h1>
        <p className={style.para}>Choose a plan that works best for you and your team. Upgrade or downgrade anytime.</p>
        </div>
    );
}
export default Description