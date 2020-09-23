import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class WhateverApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }));
    }

    removeOptions = () => {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    removeOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }

    handleAddOption = (optionValue) => {
        optionValue = optionValue.trim();

        if (!optionValue) {
            return 'Enter valid value to add item!'
        } else if (this.state.options.indexOf(optionValue) > -1) {
            return 'Option already exists!';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(optionValue)
            }
        });

    }

    handleCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    componentDidMount() {
        try {
            let savedOptions = JSON.parse(localStorage.getItem('options'));
            if (savedOptions) {
                this.setState(() => ({ options: savedOptions }));
            }
        } catch (e) {
            // nada nada nada
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options));
        }
    }

    render() {
        const title = "Whatever?";
        const subtitle = "Let me choose for you!";
        return (
            <div className="
                bg-blue-300
                h-screen
                flex
                items-center
            ">
                <div className="
                    w-full
                    text-center
                    grid
                    grid-cols-3
                ">
                    <div className="col-start-2">
                        <Header title={title} subtitle={subtitle} />
                        <Action
                            hasOptions={this.state.options.length > 0}
                            handlePick={this.handlePick}
                        />
                        <Options
                            options={this.state.options}
                            removeOptions={this.removeOptions}
                            removeOption={this.removeOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                        <OptionModal
                            selectedOption={this.state.selectedOption}
                            handleCloseModal={this.handleCloseModal}
                        />
                    </div>
                </div>
            </div>
        );
    }
}