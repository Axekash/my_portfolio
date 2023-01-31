import * as React from 'react';
import portfolioStyle from './Portfolio.module.css'
import containerStyle from "../common/style/Container.module.css";
import {SectionTItle} from "../common/SectionTItle";
import {Project} from "./project/Project";
import project1Img from '../common/image/project-1.jpg'
import project2Img from '../common/image/project-2.jpg'
import project3Img from '../common/image/project-3.jpg'

type Props = {

};
export const Portfolio = (props: Props) => {
    return (
        <section className={portfolioStyle.section}>
            <div className={containerStyle.container}>
                <SectionTItle sectionTitle={'Portfolio'} header={'Some of my most recent project'}/>
                <div className={portfolioStyle.wrapper}>
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </section>
    );
};