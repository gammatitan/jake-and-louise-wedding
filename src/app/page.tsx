import { redirect } from 'next/navigation';

export default function Home() {
  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h1 style={{ marginBottom: 24 }}>Meow</h1>
      <img src="./sox.png" />
    </div>
  );
}
