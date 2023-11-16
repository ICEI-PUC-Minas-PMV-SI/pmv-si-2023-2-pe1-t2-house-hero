
export function encrypt(value) {
    let encryptedValue = value;
    for (let i = 0; i < 5; i++) {
        encryptedValue = btoa(encryptedValue);
    }
    return encryptedValue;
}

export function decrypt(value) {
    let encryptedValue = value;
    for (let i = 0; i < 5; i++) {
        encryptedValue = atob(encryptedValue);
    }
    return encryptedValue;
}