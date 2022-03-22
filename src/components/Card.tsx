import style from './Card.module.css';
import Header from './header/Header';
import Main from './main/Main';

const Card = () => {
    return (
        <div className={style.container}>
            <Header />
            <Main />
        </div>
    );
}
 
export default Card;