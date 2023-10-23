import React, { HTMLAttributes } from 'react';

interface IBasicInput extends HTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    type: string;
    value: string;
    setValue: (text: string) => void;
    ref: React.Ref<HTMLInputElement | null>;
}
export const BasicInput: React.FC<IBasicInput> = React.forwardRef((props, ref) => {
    const { id, type, name, value, setValue } = props;

    const labelName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <>
            <label>{ labelName }</label>
            <input
                id={ id }
                placeholder={ `Enter your ${ name }` }
                name={ name }
                type={ type }
                value={ value }
                ref={ ref }
                onChange={e =>
                    setValue((e.target as HTMLInputElement).value.trim())
                }
            />
        </>
    );
})
