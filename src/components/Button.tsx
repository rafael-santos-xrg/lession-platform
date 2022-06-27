import { DiscordLogo, Lightning } from "phosphor-react";

export function Button( props: {variant?: string}) {
  if(props.variant == 'primary') {
    return (
      <a href="" className="p-4 text-sm bg-[#5865F2] flex items-center rounded font-bold uppercase gap-2.5 justify-center hover:bg-[#404EED] transition-colors">
        <DiscordLogo size={24}/>
        Comunidade no discord
      </a>
    );
  } else {
    return (
      <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2.5 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
        <Lightning size={24}/>
        Acesse o desafio
      </a>
    )
  }
}