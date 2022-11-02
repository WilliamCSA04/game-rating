import { trpc } from '../utils/trpc';
export default function IndexPage() {
  const test = trpc.getGames.useQuery(undefined, { staleTime: Infinity });
  return (
    <div>
      <p className="text-3xl font-bold underline"> teste </p>
    </div>
  );
}