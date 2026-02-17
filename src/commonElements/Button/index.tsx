import React from 'react';

type Props = {
    attrBtn: {
        [key: string]: any;
    };
    children: React.ReactNode;
}
const index: React.FC<Props> = (props: Props) => {
    const { className, ...rest } = props.attrBtn;
    const combinedClassName = `cursor-pointer transition-all active:scale-95 duration-200 ${className || ''}`;
    return <button className={combinedClassName} {...rest}>{props.children}</button>;
};

export default index;