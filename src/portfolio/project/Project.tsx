import * as React from 'react';
import projectStyle from './Project.module.css'

type ProjectPropsType = {
    picture: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={projectStyle.project} style={{background: `url(${props.picture}) center center/cover no-repeat`}} >
                {/*<div className={projectStyle.projectImg}></div>*/}
                {/*<img src={props.imageUrl} alt={props.imageName} className={projectStyle.projectImg}/>*/}
            <button className={projectStyle.button}>Click me</button>
        </div>
    );
};