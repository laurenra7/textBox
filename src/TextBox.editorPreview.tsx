import { Component, ReactNode, createElement } from "react";
import { TextInput } from "./components/TextInput";
import { TextBoxPreviewProps } from "../typings/TextBoxProps";

declare function require(name: string): string;

export class preview extends Component<TextBoxPreviewProps> {
    render(): ReactNode {
        return <TextInput value={this.props.textAttribute} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/TextBox.css");
}
