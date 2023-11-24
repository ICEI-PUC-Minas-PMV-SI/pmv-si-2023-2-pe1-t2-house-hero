
export function encrypt(value) {
    console.log(value);
    let encryptedValue = value;
    for (let i = 0; i < 5; i++) {
        encryptedValue = window.btoa(encryptedValue);
    }
    return encryptedValue;
}

export function decrypt(value) {
    let encryptedValue = value;
    console.log(encryptedValue);
    for (let i = 0; i < 5; i++) {
        encryptedValue = window.atob(encryptedValue);
    }
    return encryptedValue;
}