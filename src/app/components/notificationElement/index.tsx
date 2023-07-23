import Image from "next/image";

import {ReactNode} from "react";

interface Propriedades {
    nome: string;
    provedor: string
    hasAction: boolean;
    img: ReactNode;
}

export default function index({img, nome, provedor, hasAction = false}:Propriedades) {
    
    return(
        <div className="cursor-pointer w-full h-auto border-b-2 border-[#242424]">
            <div className="w-full h-[5rem] p-2 flex flex-col items=center">
                <section className="w-full pl-4 flex flex=row items-center gap-2 mb-2">
                    <Image
                        src={img}
                        width={15}
                        height={15}
                    /> 
                    <p className="text-[0.7rem] font-bold">{provedor}</p>
                </section>
                <section className="w-full flex flex-col justify-center pl-4"> 
                    <h1 className="font-bold">{nome}</h1>
                    
                </section>
            </div>
        </div>
    )
}