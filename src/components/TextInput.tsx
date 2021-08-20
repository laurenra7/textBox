import {Component, ReactNode, createElement, CSSProperties, ChangeEvent} from "react";
import classNames from "classnames";

export interface InputProps {
    value: string;
    className?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
    onUpdate?: (value: string) => void;
}

export class TextInput extends Component<InputProps> {
    private readonly handleChange = this.onChange.bind(this);
    render(): ReactNode {
        const className = classNames("form-control", this.props.className);
        return <input
            type="text"
            className={className}
            style={this.props.style}
            value={this.props.value}
            onChange={this.handleChange}
        />;
    }
    private onChange(event: ChangeEvent<HTMLInputElement>): void {
        if (this.props.onUpdate) {
            this.props.onUpdate(event.target.value);
        }
    }

}