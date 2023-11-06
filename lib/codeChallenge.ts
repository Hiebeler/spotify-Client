const codeVerifier = (length: number): string => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

const sha256 = (): Promise<ArrayBuffer> => {
    const plain: string = window.localStorage.getItem("code_verifier")!;
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
}

const base64encode = () => {
    let input: Promise<ArrayBuffer> = sha256();
    return input.then((buffer) => {
        const uint8Array = new Uint8Array(buffer);
        const byteArray = Array.from(uint8Array);
        const binaryString = String.fromCharCode(...byteArray);
        const base64String = btoa(binaryString)
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
        return base64String;
    });
}

const CodeChallenge = {
    base64encode,
    codeVerifier
}
export default CodeChallenge;