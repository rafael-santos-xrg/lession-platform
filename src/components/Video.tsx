interface VideoProps{
  sluglesson: string;
}

export function Video(props : VideoProps) {
  if(!props) return (
    <div className="bg-black flex justify-center mx-9 mt-8">
      <div className="h-full w-full max-h-[60vh] max-w-[1100px] aspect-video">
      </div>
    </div>
  )
  else return (
      <div className="bg-black flex justify-center mx-9 mt-8">
        <div className="h-full w-full max-h-[60vh] max-w-[1100px] aspect-video">
        </div>
      </div>
    );
  }
//   else
//     return (
//       <div className="bg-black flex justify-center mx-9 mt-8">
//         <div className="h-full w-full max-h-[60vh] max-w-[1100px] aspect-video"></div>
//       </div>
//     );