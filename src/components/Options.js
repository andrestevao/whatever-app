import React from 'react';
import Option from './Option';

const Options = (props) => {
    const warning = (
        <p className="
            text-white
            p-6
        ">Please add an option to get started!</p>
    );
    return (
        <div className="
            bg-blue-800
        ">
            {props.options.length === 0 && warning}
            <ol>
                {props.options.map((option, key) => <Option removeOption={props.removeOption} key={key} value={option} />)}
            </ol>
            <button 
                onClick={props.removeOptions}
                className="
                    bg-blue-500
                    py-4
                    px-4
                    text-white
                    font-bold
                    border-b-4
                    border-blue-700
                    w-full
                "
            >Remove all</button>
        </div>
    );

}

export default Options;