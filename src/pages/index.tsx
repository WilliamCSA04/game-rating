import { trpc } from '../utils/trpc';
export default function IndexPage() {
  const hello = trpc.hello.useQuery({ text: 'client' });
  const test = trpc.getGames.useQuery();
  
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
}