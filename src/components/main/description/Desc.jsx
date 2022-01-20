import style from './Desc.module.css';

const Desc = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Order Summary</h1>
            <p className={style.text}>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        </div>
    );
}
 
export default Desc;