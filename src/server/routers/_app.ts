import { z } from 'zod';
import { igdb, twitch } from '../services';
import { publicProcedure, router } from '../trpc';
export const appRouter = router({
  getGames: publicProcedure
    .query(async () => {
      const twitchCredentials = await twitch.login();
      const games = await igdb.getGames({ clientId: twitchCredentials.client_id, authorization: `Bearer ${twitchCredentials.access_token}` })
      return games
    })
});
// export type definition of API
export type AppRouter = typeof appRouter;