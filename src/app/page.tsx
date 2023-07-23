import NotificationElement from "./components/notificationElement/index"
import InstagramIcon from "./imgs/instagram.png";
import Matheus from "./imgs/109868999.jpg";
import { BellDot } from "lucide-react";

export default function Home() {

  return (
    <div 
    className='w-screen h-screen flex justify-center items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
      <div className='w-[25%] h-[70%] bg-[#313131] rounded-md flex flex-col items-center shadow-2xl'> 
        <div 
        className="h-[3rem] w-full border-b-2 border-[#242424] p-4  flex flex-row justify-between items-center"> 
          <h1 className="font-bold m-4">Notificações</h1>
          <BellDot/>
        </div>
        <section className="w-full h-full overflow-y-scroll">
          <NotificationElement
            hasAction 
            provedor="Instagram" 
            nome='Matheus Henrique' 
            iconProv={InstagramIcon} 
            imagemUser={Matheus} 
            mensagem="Nova solicitação pra seguir" 
          />
          <NotificationElement
            provedor="Youtube" 
            nome='FlowGames' 
            iconProv={InstagramIcon} 
            imagemUser={Matheus} 
            mensagem="Compra da ActvisionBlizzard" 
          />
        </section>
      </div>
    </div>
  )
}
