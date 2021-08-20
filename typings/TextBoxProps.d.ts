/**
 * This file was generated from TextBox.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface TextBoxContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    id: string;
    sampleText: string;
    textAttribute: EditableValue<string>;
}

export interface TextBoxPreviewProps {
    class: string;
    style: string;
    sampleText: string;
    textAttribute: string;
}
