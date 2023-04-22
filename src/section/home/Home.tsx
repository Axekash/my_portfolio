import * as React from 'react';
import homeStyle from './Home.module.css'
import image from '../../common/image/userImage.jpeg'

type Props = {

};
export const Home = (props: Props) => {
    return (
        <section className={homeStyle.home}>
            <div className={homeStyle.textWrapper}>
                <h1 className={homeStyle.title}>I AM  OPEN TO WORK AS A</h1>
                <h2 className={homeStyle.subtitle}>FRONTEND DEVELOPER</h2>
                <p className={homeStyle.subsubtitle}>based in Minsk, Belarus</p>
                <button className={homeStyle.blackButton}>View my works</button>
                <button className={homeStyle.whiteButton}>Contact me</button>
            </div>
            <div className={homeStyle.homeImage}
                 //style={{backgroundImage: `url(${image})` as any, backgroundRepeat: 'no-repeat'}}
                style={{background: `url(${image}) center center/cover no-repeat`}}
            >
                {/*<img src={image} alt=""/>*/}
            </div>
        </section>
    );
};