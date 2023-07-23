import Image from 'next/image'
import NotificationElement from "./components/notificationElement/index.tsx"
import InstagramIcon from "./imgs/instagram.png";
export default function Home() {

  return (
    <div 
    className='w-screen h-screen flex justify-center items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
      <div className='w-[25%] h-[70%] bg-[#313131] rounded-xl flex flex-col items-center shadow-2xl'> 
        <div 
        className="h-[3rem] w-full border-b-2 border-[#242424] p-4  flex flex-row justify-start items-center"> 
          <h1 className="font-bold m-4">Notificações</h1>
        </div>
        <section className="w-full h-full overflow-y-scroll">
          <NotificationElement
           provedor="Instagram" nome="Matheus Henrique" img={InstagramIcon}/>
        </section>
      </div>
    </div>
  )
}
