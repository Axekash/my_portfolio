import * as React from 'react';
import skillStyle from './Skill.module.css'

type Props = {
    imgText: string
    title: string
    description: string
};
export const Skill = (props: Props) => {
    return (
        <div className={skillStyle.skill_container}>
            <div className={skillStyle.icon_wrapper}>
                {/*<img src="#" alt={props.imgText} className={skillStyle.icon}/>*/}
                <div></div>
            </div>
            <h3 className={skillStyle.title}>{props.title}</h3>
            <p className={skillStyle.description}>{props.description}</p>
        </div>
    );
};