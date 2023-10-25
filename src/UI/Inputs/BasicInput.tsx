import { FC, Ref, forwardRef, HTMLAttributes, ChangeEvent } from 'react';

interface IBasicInput extends HTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    type: string;
    value: string;
    setValue: (e: ChangeEvent<HTMLInputElement>) => void;
    ref: Ref<HTMLInputElement | null>;
}
export const BasicInput: FC<IBasicInput> = forwardRef((props, ref) => {
    const { id, type, name, value, setValue, onBlur } = props;

    const labelName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <>
            <label htmlFor={ name }>{ labelName }</label>
            <input
                id={ id }
                placeholder={ `Enter your ${ name }` }
                name={ name }
                type={ type }
                value={ value }
                ref={ ref }
                onChange={e => setValue(e) }
                onBlur={ onBlur }
            />
        </>
    );
})
