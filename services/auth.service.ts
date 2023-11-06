import httpCommon from "@/http-common";
import CodeChallenge from "@/lib/codeChallenge"
const scope = 'user-read-private user-read-email user-top-read';
const redirectUri = 'http://localhost:3030/auth/callback';
const authUrl = new URL("https://accounts.spotify.com/authorize")

const authorize = async (clientId: string) => {
    window.localStorage.setItem("code_verifier", CodeChallenge.codeVerifier(64));
    window.localStorage.setItem("client_id", clientId);
    let codeChallenge = await CodeChallenge.base64encode();

    const params = {
        response_type: 'code',
        client_id: clientId,
        scope,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
        redirect_uri: redirectUri,
    }

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
}

const getToken = async (code: string) => {
    let codeVerifier: string = localStorage.getItem('code_verifier')!;

    let client_id: string | null = window.localStorage.getItem("client_id");
    if (!client_id) {
        throw Error("clientId doesnt exist");
    }
    try {
        const response = await httpCommon.post("https://accounts.spotify.com/api/token", {
            client_id,
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectUri,
            code_verifier: codeVerifier,
        }
        );
        const data: IGetToken = response.data;
        console.log(data);
        if (data.access_token) {
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
        }
    } catch(e) {
        console.log(e);
        throw new Error("error");
    }
}

const refreshToken = async () => {
    const refreshToken: string | null = localStorage.getItem('refresh_token');
    const client_id: string | null = window.localStorage.getItem("client_id");
    if (refreshToken) {
        try {
            const response = await httpCommon.post("https://accounts.spotify.com/api/token", {
                client_id,
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            }
            );
            const data: IGetToken = response.data;
            if (data.access_token) {
                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('refresh_token', data.refresh_token);
            }
        } catch(e) {
            console.log(e);
            throw new Error("error");
        }
    }
}

const AuthService = {
    authorize,
    getToken,
    refreshToken
}

export default AuthService;