import * as React from 'react';
import skillsSectionStyle from './SectionTitle.module.css'


type Props = {
    sectionTitle: string
    header: string
};
export const SectionTItle = (props: Props) => {
    return (
        <div className={skillsSectionStyle.sectionTitle}>
            <p>
                <span className={skillsSectionStyle.preHeaderText}>
                    {props.sectionTitle}
                </span>
            </p>
            <h2 className={skillsSectionStyle.header}>
                {props.header}
            </h2>
        </div>
    );
};