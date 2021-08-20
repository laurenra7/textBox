import { Component, ReactNode, createElement } from "react";
// import { hot } from "react-hot-loader/root";

import { TextBoxContainerProps } from "../typings/TextBoxProps";
import { TextInput } from "./components/TextInput";

import "./ui/TextBox.css";

export default class TextBox extends Component<TextBoxContainerProps> {
    private readonly onUpdateHandle = this.onUpdate.bind(this);
    render(): ReactNode {
        const value = this.props.textAttribute.value || "";
        return <TextInput
            value={ value }
            style={this.props.style}
            className={this.props.class}
            tabIndex={this.props.tabIndex}
            onUpdate={this.onUpdateHandle}
        />;
        // return <TextInput sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
    private onUpdate(value: string): void {
        this.props.textAttribute.setValue(value);
    }
}

// export default hot(TextBox);