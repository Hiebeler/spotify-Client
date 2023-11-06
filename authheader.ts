export default function authHeader() {
    const token = window.localStorage.getItem("access_token");
    if (token) {
        return { Authorization: 'Bearer ' + token };
    } else {
        console.log("Kein Token vorhanden")
        return {};
    }
}
