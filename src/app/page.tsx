import Menu from './components/Menu';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className='text-xl'>Toyko Sushi Menu</div>
      <div className='text-lg'>Cash Only</div>
      <div>
        Pick Up Address:1320 W 32nd St
      </div>
      <Menu />
    </main>
  );
}
