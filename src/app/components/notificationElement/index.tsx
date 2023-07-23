import Image, { StaticImageData } from "next/image";


interface Propriedades {
    nome: string;
    provedor: string
    hasAction?: boolean;
    iconProv: string | StaticImageData;
    imagemUser: string | StaticImageData;
    mensagem: string;
}

export default function index({imagemUser, iconProv, nome, mensagem, provedor, hasAction = false}:Propriedades) {
    
    return(
        <div className="cursor-pointer w-full h-auto border-b-2 border-[#242424] hover:bg-[#292929]">
            <div className="w-full h-[6rem] mb-3 p-2 flex flex-col items=center">
                <section className="w-full pl-4 flex flex=row items-center gap-2 mb-2">
                    <Image
                        src={iconProv}
                        width={15}
                        height={15}
                        alt="Icone"
                    /> 
                    <p className="text-[0.7rem] font-bold">{provedor}</p>
                </section>
                <div className="w-full flex flex-row items-start mt-2 pl-4">
                    <Image className="rounded-[50%]"
                        src={imagemUser}
                        width={40}
                        height={40}
                        alt="Foto"
                    />
                <section className="w-full flex flex-col justify-center ml-4"> 
                    <h1 className="font-bold">{nome}</h1>
                    <h1 className="text-[0.8rem] text-[#999999]">{mensagem}</h1>
                    <h1 className="text-[0.8rem] text-[#999999]">Hoje, 10:21am</h1>
                </section>
                </div>
            </div>
            {hasAction &&
                <div className="h-[3rem] w-full flex flex-row justify-end pr-4 mt-4 gap-2">
                    <button className="bg-[#e61010] hover:bg-[#941f1f] w-[5rem] h-[2rem] ">
                        Recusar
                    </button>
                    <button className="bg-[#1cc414] hover:bg-[#2d8c29] w-[5rem] h-[2rem]  ">
                        Aceitar
                    </button>
                </div>    
            }
        </div>
    )
}