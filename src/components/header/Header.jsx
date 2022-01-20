import style from './Header.module.css';
import img from '../../assets/images/illustration-hero.svg';

const Header = () => {
    return (
        <img src={img} alt="Header image" className={style.image} />
    );
}

export default Header;