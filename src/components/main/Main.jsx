import style from './Main.module.css';
import Desc from './description/Desc';
import Subs from './subscription/Subs';
import Options from './options/Options';

const Main = () => {
    return (
        <div className={style.container}>
            <Desc />
            <Subs />
            <Options />
        </div>
    );
}
 
export default Main;