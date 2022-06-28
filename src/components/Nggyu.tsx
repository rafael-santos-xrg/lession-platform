import { DefaultUi, Player, Youtube } from "@vime/react";

import '@vime/core/themes/default.css'

export function Nggyu(){
  return (
    <div className="bg-black flex justify-center mx-9 mt-8">
        <div className="h-full w-full max-h-[60vh] max-w-[1100px] aspect-video">
          <Player >
            <Youtube videoId="dQw4w9WgXcQ" />
            <DefaultUi />
          </Player>
        </div>
      </div>
  )
}