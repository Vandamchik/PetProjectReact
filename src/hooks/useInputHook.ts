import { ChangeEvent, useCallback, useState } from "react";

interface IValidationFunction<T> {
    (value: T): boolean;
}

export function useInputHook<T>(defaultValue: T, ...validationFn: IValidationFunction<T>[]) {
    const [enteredValue, setEnteredValue] = useState<T>(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    let valueIsValid;
    if (validationFn.length > 0) {
        valueIsValid = validationFn.every(fn => fn(enteredValue));
    }

    const handleTextInput = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const newValue = e.currentTarget.value.trim() as T;
            setEnteredValue(newValue);
            setDidEdit(false);
        }, [])

    const handleBooleanInput = useCallback(
        () => {
            setEnteredValue((prevState: T) => !prevState as T);
            setDidEdit(false);
        }, [])

    const handleInputBlur = useCallback(() => setDidEdit(true), [])

    return {
        value: enteredValue,
        handleTextInput,
        handleBooleanInput,
        handleInputBlur,
        setEnteredValue,
        hasError: didEdit && !valueIsValid
    }
}
