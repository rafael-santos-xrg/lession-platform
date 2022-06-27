import { CaretRight, FileArrowDown, Image } from "phosphor-react";

export function Card(props: { variant?: string }) {
  if (props.variant == "primary") {
    return (
      <a
        href=""
        className="bg-gray-700 rounded overflow-hidden flex items-stretch hover:bg-gray-600 transition-colors"
      >
        <div className="bg-blue-500 h-full p-6 flex items-center">
          <FileArrowDown size={40} color={"#09090A"} />
        </div>
        <div className="p-6 leading-relaxed">
          <strong className="text-2xl">Material complementar</strong>
          <p className="leading-6 mt-2">
            Acesse o material complementar para acelerar o seu desenvolvimento
          </p>
        </div>
        <div className="h-full p-6 flex items-center">
          <CaretRight size={24} color={"#61DAFB"} />
        </div>
      </a>
    );
  } else {
    return(
      <a
      href=""
      className="bg-gray-700 rounded overflow-hidden flex items-stretch hover:bg-gray-600 transition-colors"
    >
      <div className="bg-blue-500 h-full p-6 flex items-center">
        <Image size={40} color={"#09090A"} />
      </div>
      <div className="p-6 leading-relaxed">
        <strong className="text-2xl">Wallpapers exclusivos</strong>
        <p className="leading-6 mt-2">
          Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina!
        </p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} color={"#61DAFB"} />
      </div>
    </a>
    )
  }
}
