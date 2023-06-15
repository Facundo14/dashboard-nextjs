import Image from 'next/image'
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact, IoStarOutline } from 'react-icons/io5'
import { SideMenuItem } from './SideMenuItem'

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subTitle: 'Visualización general'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40} />,
        title: 'Counter',
        subTitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={40} />,
        title: 'Pokemons',
        subTitle: 'Generación Estática'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoStarOutline size={40} />,
        title: 'Favoritos',
        subTitle: 'Pokemons Favoritos'
    },
]

export const Sidebar = () => {
    return (
        <div 
            id="menu" 
            style={{width:'400px'}}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className='mr-2' />
                    <span> Dash</span>
                    <span className="text-blue-500">8</span>.
                </h1>
                <p className="text-slate-500 text-sm">Maneje sus actividades</p>
            </div>
            <div id="profile" className=" flex flex-col items-center justify-center px-6 py-10">
                <p className="text-slate-500">Bienvendido</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image  
                            className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" 
                            alt="" 
                            height={50}
                            width={50}
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Tanovich Facundo
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">

                {
                    menuItems.map(item => (
                        <SideMenuItem key={item.path} {...item} />
                    ))
                }

            </div>
        </div>
    )
}
