'use client'
import { useState } from "react";
import Image from "next/image";
import { menu } from "@/data/menu";
const Menu:React.FC = () => {
  const [clickedTab, setTabIndex] = useState(0);
  const images = ['menu1', 'menu2', 'nigiri1', 'nigiri2'];
  return (
    <div className="my-4 flex flex-col items-center">
      <div className="text-xl text-center mb-2">Menu | 菜单</div>
      <div>
        {images.map(img => <Image src={`/images/${img}.jpg`} key={img} alt="menu1" height={300} width={500} priority />)}
      </div>
      <div className="bg-white text-black mt-2 rounded-md flex items-start justify-center md:w-[50rem] min-w-md max-w-[1000px] min-h-[500px]">
        <div className="min-w-full bg-white text-black">
            <div className="flex space-x-4 md:p-4 p-1 bg-white">
              {menu.map((category,i) =>
                <button key={category.type} onClick={() => setTabIndex(i)}
                  className={`md:text-xl capitalize flex-1 py-2 md:px-4 px-3 rounded-md focus:outline-none ${clickedTab !== i && 'hover:bg-blue-600 hover:bg-opacity-30'} focus:shadow-outline-blue transition-all duration-300 ${clickedTab === i ? 'bg-blue-500 text-white' : ''}`}
                >
                  {category.type}
                </button>
              )}
            </div>
            <div className="p-4 border-t-4 border-blue-600">
                <h2 className="capitalize text-2xl font-semibold mb-2 text-blue-600">
                  {menu[clickedTab].type}
                  <span className="ml-4">${menu[clickedTab].price}</span>
                </h2>
                <ul>
            {menu[clickedTab].sushi.map(item =>
                    <li key={item.id} className="py-1">
                      <b className="mr-6">{item.id}</b>
                      <b>{item.name}</b>
                      <div className="text-xs tracking-tighter md:text-sm font-light">{item.ingredient}</div>
                    </li>)
            }
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Menu;