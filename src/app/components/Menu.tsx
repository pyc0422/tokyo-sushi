import Image from "next/image";

const Menu:React.FC = () => {
  const images = ['menu1', 'menu2', 'price1', 'price2'];
  return (
    <div>
      {images.map(img => <Image src={`/images/${img}.jpg`} key={img} alt="menu1" height={500} width={500}/>)}

    </div>
  )
}

export default Menu;