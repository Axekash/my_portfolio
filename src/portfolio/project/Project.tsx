import * as React from 'react';
import projectStyle from './Project.module.css'
import project1Img from '../../common/image/project-1.jpg'
import * as url from "url";

export const Project = (props: any) => {
    return (
        <div className={projectStyle.project}>
                {/*<div className={projectStyle.projectImg}></div>*/}
                {/*<img src={props.imageUrl} alt={props.imageName} className={projectStyle.projectImg}/>*/}
            <button className={projectStyle.button}>Click me</button>
        </div>
    );
};