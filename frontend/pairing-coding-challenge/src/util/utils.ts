export function formatDate(dateStr: string): string {
    const date = new Date(dateStr);

    if (isNaN(date.getTime())) {
        return dateStr;
    }

    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long', // e.g., Thursday
        year: 'numeric', // e.g., 2025
        month: 'long',   // e.g., April
        day: 'numeric'   // e.g., 23
    };

    return date.toLocaleDateString('en-US', options);
}

export function formatTime(dateTimeStr: string): string {
    const date = new Date(dateTimeStr);

    if (isNaN(date.getTime())) {
        return dateTimeStr;
    }

    const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    return date.toLocaleTimeString('en-US', options);
}


export const hasUppercase = (password: string) => /[A-Z]/.test(password);
export const hasDigit = (password: string) => /[0-9]/.test(password);
export const hasLowercase = (password: string) => /[a-z]/.test(password);
export const hasSpecialChar = (password: string) => /[!@#$%^&*(),.?":{}|<>]/.test(password);

export const validatePassword = (password: string) =>
    hasDigit(password) &&
    hasUppercase(password) &&
    hasLowercase(password) &&
    hasSpecialChar(password);

