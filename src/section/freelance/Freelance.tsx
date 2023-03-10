import * as React from 'react';
import freelanceStyle from './Freelance.module.css'
import containerStyle from "../../common/style/Container.module.css";
import backGImage from '../../common/image/intro-bg-2.jpg'
import {SectionTItle} from "../../common/SectionTItle";

type Props = {};
export const Freelance = (props: Props) => {
    return (
        <div className={freelanceStyle.freelance}>
            <div className={containerStyle.container}>
                <SectionTItle sectionTitle={'Freelance'} header={'Interested in working with me?'}/>
                <button className={containerStyle.button}> Contact me </button>
            </div>
        </div>
    );
};