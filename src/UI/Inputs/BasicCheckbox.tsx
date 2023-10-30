import  { Ref, FC, forwardRef, HTMLAttributes } from 'react';

import styles from './BasicCheckbox.module.scss';

interface IBasicCheckbox extends HTMLAttributes<HTMLInputElement> {
    title: string
    id: string;
    name: string;
    value: string;
    setValue: () => void;
    ref: Ref<HTMLInputElement | null>;
}
export const BasicCheckbox: FC<IBasicCheckbox> = forwardRef((props, ref) => {
    const { id, name, value, setValue, title}  = props;

    return (
        <div className={ styles.basicCheckbox__wrapper } >
            <label htmlFor={ name }>{ title }</label>
            <input
                id={ id }
                placeholder={ `Enter your ${ name }` }
                name={ name }
                type='checkbox'
                value={ value }
                ref={ ref }
                onChange={ setValue }
            />
        </div>
    );
})
