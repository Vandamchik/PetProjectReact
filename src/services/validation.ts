export function isEmail(value: string): boolean {
    return value.includes('@');
}

export function isNotEmpty(value: string): boolean {
    return value.length > 0;
}

export function hasMinLength(value: string): boolean {
    return value.length >= 6;
}

