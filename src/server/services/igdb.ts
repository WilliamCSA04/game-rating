import invariant from "tiny-invariant";
import { handleResponse } from "./helpers";

invariant(process.env.GAMES_API, "Missing game API")
const GAMES_API = process.env.GAMES_API

type GetGamesType = {
    clientId: string,
    authorization: string,
}

type GameType = {
    id: number,
    category: number,
    created_at: number,
    external_games: [ number, number ],
    name: string,
    slug: string,
    updated_at: number,
    url: string,
    checksum: string
  }

export async function getGames({ clientId, authorization }: GetGamesType) {
    const data = await fetch(GAMES_API, { method: 'post', headers: { 'Client-ID': clientId, Authorization: authorization }, body: 'fields *; limit 10;' })
    return handleResponse<GameType[]>(data)
}