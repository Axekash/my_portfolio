import * as React from 'react';
import skillsStyle from './Skills.module.css'
import {SectionTItle} from "../../common/components/title/SectionTItle";
import containerStyle from "../../common/container/Container.module.css";
import { Skill } from './skill/Skill';

type Props = {

};
export const Skills = (props: Props) => {

    let htmlDescr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias blanditiis cum ea, ex nobis nostrum optio sit voluptas voluptatem! Ab consequuntur dolore laboriosam libero nam quia, tempore totam vel.'
    let cssDescr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias blanditiis cum ea, ex nobis nostrum optio sit voluptas voluptatem! Ab consequuntur dolore laboriosam libero nam quia, tempore totam vel.'
    let jsDescr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias blanditiis cum ea, ex nobis nostrum optio sit voluptas voluptatem! Ab consequuntur dolore laboriosam libero nam quia, tempore totam vel.'
    let typescriptDescr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias blanditiis cum ea, ex nobis nostrum optio sit voluptas voluptatem! Ab consequuntur dolore laboriosam libero nam quia, tempore totam vel.'
    let reactDescr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias blanditiis cum ea, ex nobis nostrum optio sit voluptas voluptatem! Ab consequuntur dolore laboriosam libero nam quia, tempore totam vel.'
    let reduxDescr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias blanditiis cum ea, ex nobis nostrum optio sit voluptas voluptatem! Ab consequuntur dolore laboriosam libero nam quia, tempore totam vel.'


    return (
        <section className={skillsStyle.skills}>
            <div className={containerStyle.container}>
                <SectionTItle sectionTitle={'Skills'} header={'I work in ...'}/>
                <div className={skillsStyle.skills_wrapper}>
                    <Skill imgText={"HTML"} title={"HTML"} description={htmlDescr}/>
                    <Skill imgText={"CSS"} title={"CSS"} description={cssDescr}/>
                    <Skill imgText={"JS"} title={"JS"} description={jsDescr}/>
                    <Skill imgText={"Typescript"} title={"Typescript"} description={typescriptDescr}/>
                    <Skill imgText={"React"} title={"React"} description={reactDescr}/>
                    <Skill imgText={"Redux"} title={"Redux"} description={reduxDescr}/>
                </div>
            </div>

        </section>
    );
};