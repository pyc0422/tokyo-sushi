import Image from 'next/image';
import Menu from './components/Menu';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className='text-xl flex flex-row justify-center items-center'>
        <Image src="/images/logo.png" height={30} width={30} className='w-auto p-2' alt="logo"/>
        <div>Toyko Sushi Depot</div>
      </div>
      <div>
        Pick-up Address ｜ 取货地址: 1320 W 32nd St
      </div>
      <Menu />
    </main>
  );
}
