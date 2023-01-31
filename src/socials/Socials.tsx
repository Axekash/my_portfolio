import * as React from 'react';
import socialsStyle from './Socials.module.css'

type Props = {

};
export const Socials = (props: Props) => {
    return (
        <div className={socialsStyle.socials}>
            <div><a href="#"></a></div>
            <div><a href="#"></a></div>
            <div><a href="#"></a></div>
            <div><a href="#"></a></div>
        </div>
    );
};