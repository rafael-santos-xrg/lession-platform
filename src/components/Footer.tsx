import { Rocketseat_icon } from "./Rockseat_icon";

export function Footer() {
  return (
    <div className="border-t border-gray-500 mx-6 mb-5 flex pt-6 h-fit items-center justify-between text-gray-300 text-base">
      <div className="flex w-fit gap-6 items-center">
        <Rocketseat_icon />
        <span>Rocketseat - Todos os direitos reservados</span>
      </div>
      <span>Políticas de privacidade</span>
    </div>
  );
}
