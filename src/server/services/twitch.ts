import invariant from 'tiny-invariant';
import { handleResponse } from './helpers';

invariant(process.env.TWITCH_CLIENT_ID, "Missing Client ID");
invariant(process.env.TWITCH_SECRET_KEY, "Missing Secret Key");
invariant(process.env.TWITCH_OAUTH2, "Missing Twitch URL");

const BASE_URL = process.env.TWITCH_OAUTH2
const CLIENT_ID = process.env.TWITCH_CLIENT_ID
const SECRET_KEY = process.env.TWITCH_SECRET_KEY

type LoginType = {
    access_token: string,
    expires_in: number,
    token_type: string,
}

export async function login() {
    const params = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: SECRET_KEY,
    })
    const res = await fetch(`${BASE_URL}?${params}`, { method: 'post' })
    const data = await handleResponse<LoginType>(res);
    return {
        client_id: CLIENT_ID,
        ...data
    }
}