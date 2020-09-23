import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();

        const optionValue = e.target.elements.option.value;
        const error = this.props.handleAddOption(optionValue);

        this.setState(() => ({ error: error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <div className="
            p-4
            flex
            justify-between
            ">
                    <input className="
                        p-4
                        bg-blue-900
                        text-white
                        font-black
                    " type='text' name='option' placeholder="Type something here!" />
                    <button className="
                        bg-blue-500
                        border-b-4
                        border-blue-700
                        p-4
                        text-white
                        font-black
                    ">Add Option</button>
                </div>
                    {this.state.error && <p className="p-6 bg-red-500 text-white text-2xl">{this.state.error}</p>}
            </form>
        );

    }
}