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


/**
 * Checks whether the given password contains at least:
 * - One digit (0-9)
 * - One uppercase letter (A-Z)
 * - One lowercase letter (a-z)
 * - One special character (e.g., !@#$%^&*(),.?":{}|<>)
 *
 * @param password - The password string to validate.
 * @returns {boolean} True if the password meets all the criteria; otherwise, false.
 */
export function validatePassword(password: string): boolean {
    const hasDigit = /[0-9]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return hasDigit && hasUppercase && hasLowercase && hasSpecialChar;
}
