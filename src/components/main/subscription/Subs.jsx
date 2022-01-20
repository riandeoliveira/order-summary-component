import style from './Subs.module.css';
import icon from '../../../assets/icons/icon-music.svg';

const Subs = () => {
    return (
        <div className={style.container}>
            <div className={style.container_icon_plan}>
                <img src={icon} alt="Music icon" />
                <div className={style.container_plan}>
                    <span className={style.plan}>Annual Plan</span>
                    <span className={style.price}>$59.99/year</span>
                </div>
            </div>
            <a href="#" className={style.change}>Change</a>
        </div>
    );
}

export default Subs;