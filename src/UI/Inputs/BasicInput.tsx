import { FC, Ref, forwardRef, HTMLAttributes, ChangeEvent } from 'react';

import styles from './BasicInput.module.scss';

interface IBasicInput extends HTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    type: string;
    value: string;
    setValue: (e: ChangeEvent<HTMLInputElement>) => void;
    ref: Ref<HTMLInputElement | null>;
    inputError?: boolean;
    inputErrorMessage?: string;
}
export const BasicInput: FC<IBasicInput> = forwardRef((props, ref) => {
    const {
        id,
        type,
        name,
        value,
        setValue,
        onBlur,
        inputError,
        inputErrorMessage
    } = props;

    const labelName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div
            className={ styles.basicInput__wrapper }
        >
            <label
                htmlFor={ name }
            >
                { inputError ? <span>{ inputErrorMessage }</span> : labelName }
            </label>
            <input
                id={ id }
                style={ inputError ? { border: '2px solid #930303' } : undefined }
                placeholder={ `Enter your ${ name }` }
                name={ name }
                type={ type }
                value={ value }
                ref={ ref }
                onChange={e => setValue(e) }
                onBlur={ onBlur }
            />
        </div>
    );
})
