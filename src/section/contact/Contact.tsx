import * as React from 'react';
import contactStyle from './Contact.module.css'
import containerStyle from "../../common/container/Container.module.css";

type Props = {

};
export const Contact = (props: Props) => {
    return (
        <section className={contactStyle.contact}>
            <div className={containerStyle.container}>
                <h2 className={contactStyle.title}>
                    Contact me
                </h2>
                <div className={contactStyle.formStyle}>
                    <form action="#" className={contactStyle.formStyle}>
                        <label form={'name'}>What is Your Name:</label>
                        <input type="text" id='name'/>
                        <label form={'email'}>Your Email Address:</label>
                        <input type="text" id='email'/>
                        <label form={'help'}>How can I Help you?:</label>
                        <textarea id='help'/>
                    </form>
                </div>
                <button className={contactStyle.button}>Contact me</button>
            </div>
        </section>
    );
};