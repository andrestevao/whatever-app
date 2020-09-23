import React from 'react';

const Action = (props) => {
    return (
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                className="
                    bg-blue-500
                    font-black
                    text-white
                    px-4
                    py-4
                    border-b-4
                    border-blue-700
                    w-full
                    text-2xl
                    disabled:opacity-75
                "
            >What should i do?</button>
    );
};

export default Action;