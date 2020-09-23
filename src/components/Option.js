import React from 'react';

const Option = (props) => {
    return (
        <li className="
            flex
            justify-between
            p-4
        ">
            <span className="
                text-white
            ">{props.value}</span>
            <button
                onClick={() => {
                    props.removeOption(props.value)
                }}
                className="
                    bg-blue-500
                    text-white
                    px-2
                    py-2
                    border-b-4
                    border-blue-700
                "
            >Remove</button>
        </li>
    );
};

export default Option;