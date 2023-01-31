import * as React from 'react';
import headerStyle from './Header.module.css'
import {Nav} from "../nav/Nav";
import {Socials} from "../socials/Socials";
import containerStyle from '../common/style/Container.module.css'


type Props = {

};
export const Header = (props: Props) => {
    return (
        <div className={headerStyle.header}>
            <div className={containerStyle.container}>
                <div className={headerStyle.wrapper}>
                    <div>Alex Kuchutkov</div>
                    <Nav />
                    <Socials />
                </div>
            </div>
        </div>
    );
};