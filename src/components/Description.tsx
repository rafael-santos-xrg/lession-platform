import { Button } from "./Button";
import { Card } from "./Card";
import { Video } from "./Video";

export function Description() {
  return (
    <div className="flex-1">
      <Video />
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex gap-4 align-start">
          <div className="flex-1">
            <h1 className="text-2xl font-bold ">
              Aula 01 - Criando o projeto e realizando o setup inicial
            </h1>
            <p className="mt-4 leading-relaxed text-gray-200">
            Nessa aula vamos dar início ao projeto criando a estrutura base da
            aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
            realizar o setup do nosso projeto no GraphCMS criando as entidades
            da aplicação e integrando a API GraphQL gerada pela plataforma no
            nosso front-end utilizando Apollo Client.
            </p>   
          </div>
            <div className="flex flex-col gap-4">
              < Button variant="primary" />
              < Button variant="secondary" />
            </div>         
        </div>
        <div className="flex mt-6 gap-4 items-center">
          <img src="https://github.com/rafael-santos-xrg.png" className="rounded-full border-2 border-blue-500 h-16" />
          <div className="leading-relaxed">
            <strong className="font-bold text-2xl block">Rafael Santos</strong>
            <span className="text-gray-200 text-sm block">Dev Jr. da @Jurify</span>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
