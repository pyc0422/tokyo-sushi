import Image from "next/image";

const Menu:React.FC = () => {
  const images = ['menu1', 'menu2', 'price1', 'price2'];
  return (
    <div className="my-4">
      <div className="text-xl text-center mb-2">Menu | 菜单</div>
      {images.map(img => <Image src={`/images/${img}.jpg`} key={img} alt="menu1" height={300} width={500} priority />)}

    </div>
  )
}

export default Menu;