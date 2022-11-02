import { trpc } from '../utils/trpc';
export default function IndexPage() {
  const hello = trpc.hello.useQuery({ text: 'client' });
  const test = trpc.getGames.useQuery(undefined, { staleTime: Infinity });
  
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
      <p className="text-3xl font-bold underline"> teste </p>
    </div>
  );
}