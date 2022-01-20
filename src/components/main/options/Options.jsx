import style from './Options.module.css';

const Options = () => {
    return (
        <div className={style.container}>
            <button className={style.button_accept}>Proceed to Payment</button>
            <div className={style.container_button}>
                <span className={style.button_cancel}>Cancel Order</span>
            </div>
        </div>
    );
}

export default Options;