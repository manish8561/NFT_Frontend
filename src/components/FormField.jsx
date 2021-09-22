import React from "react";
import Select from 'react-select'
import eth from '../assets/Images/eth.svg'
import './Reactselect/Reactselect.scss'

const TextField = props => {
    // props.input.value = props.formValue;

    const { meta = {} } = props;
    const inputProps = {
        type: props.type || "text",
        className: props.className || "LoginInput",
        style: props.style,
        name: props.input.name,
        id: props.input.name,
        disabled: props.disabled,
        readOnly: props.readOnly,
        autoFocus: props.autoFocus,
        autoComplete: props.autoComplete,
        placeholder: props.placeholder,
        maxLength: props.maxLength,
        value: meta.uncontrolled ? undefined : props.input.value,
        defaultValue: meta.uncontrolled ? props.defaultValue : undefined,
        onChange: props.input.onChange,
        onKeyPress: props.onKeyPress,
        onKeyUp: props.onKeyUp,
        step: "any"
    };

    return (
        <React.Fragment>
            <input {...inputProps} style={inputProps.style} placeholder={inputProps.placeholder} className={inputProps.className} />
            {meta.touched && meta.error ? (
                <div className="form__field-error text-danger">{meta.error}</div>
            ) : null}
        </React.Fragment>
    );
};

const CheckBox = props => {
    const { meta = {} } = props;

    const checboxProps = {
        type: "checkbox",
        className: "form__checkbox",
        name: props.input.name,
        id: props.input.id,
        headLabel: props.input.label,
        defaultChecked: meta.uncontrolled ? props.defaultChecked : undefined,
        onChange: props.input.onChange,
        checked: props.input.checked
    };

    return (
        <React.Fragment>
            <input type="checkbox" label={props.label} {...checboxProps} />
            <label className="form__checkbox-label" htmlFor={props.input.name}>
                {props.headLabel}
            </label>
            {meta.touched && meta.error ? (
                <div className="form__field-error">{meta.error}</div>
            ) : null}
        </React.Fragment>
    );
};

const RadioBox = props => {
    const { meta = {}, onChangeType } = props;

    const handleChange = (e, { value }) => {
        e.preventDefault();
        if (value) {
            props.input.onChange(value);
            onChangeType(value);
        }
    };

    const radioProps = {
        type: props.type,
        name: props.input.name,
        value: props.input.value,
        label: props.label,
        checked: props.checked
    };

    return (
        <React.Fragment>
            <input type="radio" {...radioProps} onChange={handleChange} />
            {meta.touched && meta.error ? (
                <div className="form__field-error">{meta.error}</div>
            ) : null}
        </React.Fragment>
    );
};

const SelectField = ({ input, meta: { touched, error }, children, className, formValue, defaultValue, placeholder }) => {
    return (
        <React.Fragment>
            <select {...input} placeholder={placeholder} className="selectField">
                <option value=""> {placeholder} </option>
                {children.map(row => {
                    return (
                        <option className={className} key={row.key} value={row.key}>
                            {row.title}
                        </option>
                    );
                })}
            </select>
            {touched && error ? (
                <div className="form__field-error text-danger">{error}</div>
            ) : null}
        </React.Fragment>
    );
};

const File = ({ input, type, meta: { touched, error }, accept, className, onChangeImage }) => {

    const handleChange = (event, input) => {
        event.preventDefault();
        let imageFile = event.target.files[0];
        if (imageFile) {
            input.onChange(imageFile);
            onChangeImage(event);
        }
    };

    return (
        <div>
            <input name="name"
                type={type}
                accept={input.accept}
                className={className}
                onChange={(e) => handleChange(e, input)}
            />
            {touched && error ? (
                <div className="form__field-error text-danger">{error}</div>
            ) : null}
        </div>
    );
};

const TextAreaField = ({ input, type, maxLength, formValue, placeholder, className, textarea, rows, meta: { touched, error, warning, invalid } }) => {

    const textareaType = (
        <textarea
            {...input}
            placeholder={placeholder}
            type={type}
            rows={rows}
            maxLength={maxLength}
            className={className}
        />
    );

    const inputType = (
        <input
            {...input}
            placeholder={placeholder}
            type={type}
        />
    );

    return (
        <div>
            <div>
                {textarea ? textareaType : inputType}
                {touched &&
                    ((error && <span className="form__field-error text-danger"> {error} </span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div>
    );
};
const MultiSelect = props => {
    const options = [
        {
            value: 'Eth', label: (
                <div>
                    <img src={props.currencyicon} className="optionIcon" />
                    {props.placeholder}
                </div>
            ),
        }
    ]
    return (
        <div>
            <Select options={options} className="form-control"

                options={options}
                defaultValue={options[0]}
                classNamePrefix="react-select"
                placeholder="{props.placeholder}"
                label="{props.label}"
            />
        </div>
    )
}

const FormField = props => {
    switch (props.type) {
        case "file":
            return <File {...props} />;
        case "checkbox":
            return <CheckBox {...props} />;
        case "select":
            return <SelectField {...props} />;
        case "textarea":
            return <TextAreaField {...props} />;
        case "radio":
            return <RadioBox {...props} />
        case "multiselect":
            return <MultiSelect {...props} />
        default:
            return <TextField {...props} />;
    }
};



export { TextField, CheckBox, FormField, MultiSelect };