import React from 'react';

const Header = (props) => {
    return (
        <div className="
            bg-blue-700
            p-4
        ">
            <h1 className="
                text-4xl
                text-white
                font-bold
            ">
                {props.title}
            </h1>
            <h2 className="
                text-2xl
                text-white
            ">
                {props.subtitle}
            </h2>
        </div>
    );
};

export default Header;