import * as React from 'react';
import containerStyle from "../../common/container/Container.module.css";
import aboutMeStyle from './AboutMe.module.css'
import {SectionTItle} from "../../common/components/title/SectionTItle";

type Props = {};
export const AboutMe = (props: Props) => {
    return (
        <section className={aboutMeStyle.aboutMe}>
            <div className={containerStyle.container}>
                <SectionTItle sectionTitle={'About me'} header={'Know me more'}/>
                <div className={aboutMeStyle.wrapper}>
                    <div className={aboutMeStyle.wrapper_description}>
                        <h2>Hi, I am Alexandr Kuchutkou</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet aperiam atque autem commodi
                            consectetur, culpa, cupiditate deleniti dolores inventore magnam nulla odit pariatur perferendis
                            qui quo rerum tempore velit.
                        </p>
                    </div>
                    <div className={aboutMeStyle.wrapper_box}>
                        <div>
                        </div>
                        <h3>
                            Years of Expeariance
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};