import style from './Pricing.module.css'

function Pricing(){
    return(
        <div className={style.cards}>
        <div className={style.card1}>
            <h3>Basic</h3>
            <h1 className={style.price}>Rs.499/month</h1>
            <ul>
                <li>1 User</li>
                <li>5 Projects</li>
                <li>Email Support</li>
            </ul>
        </div>
         <div className={style.card2}>
            <h3>Standard</h3>
            <h1 className={style.price}>Rs.999/month</h1>
            <ul>
                <li>5 Users</li>
                <li>20 Projects</li>
                <li>Priority Support</li>
            </ul>
        </div>
         <div className={style.card3}>
            <h3>Premium</h3>
            <h1 className={style.price}>Rs.1499/month</h1>
            <ul>
                <li>Unlimited Users</li>
                <li>Unlimited Projects</li>
                <li>24/7 Support</li>
            </ul>
        </div>
    </div>
    );
}
export default Pricing