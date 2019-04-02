import React from "react";

export default class Field extends React.Component{
    render() {
        const {type, name, readonly, placeholder, label, onChange, value} = this.props;
        return (
            <div className="field__wrapper">
                <label>
                    {label}:&nbsp;
                    <input name={name} type={type} readOnly={readonly} value={value} placeholder={placeholder} onChange={onChange}/>
                </label>
            </div>
        );
    }
}