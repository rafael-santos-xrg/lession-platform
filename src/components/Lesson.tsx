import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLiveLesson = props.type === 'live' ? true : false;
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormat = format(props.availableAt, "EEEE' • 'd' de 'MMMM ' • 'KK'h'mm", {
    locale: ptBR
  })

  return (
    <a href="#">
      <span className="text-gray-300">
        {availableDateFormat}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2"> 
        <header className="flex justify-between">
          {isLessonAvailable ? (
          <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
            <CheckCircle size={20} />
            Conteúdo liberado
          </span>
          ) : (
          <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
            <Lock size={20} />
            Em Breve
          </span>
          )}

          {isLiveLesson ? (<span className="text-xs rounded border px-2 py-[0.125rem] text-red-500 border-red-500 font-bold">
            AO VIVO
          </span>) : (<span className="text-xs rounded border px-2 py-[0.125rem] text-white border-blue-500 font-bold">
            AULA PRÁTICA
          </span>)}
        </header>

        <strong className="text-gray-200 mt-5 block">
          {props.title}
        </strong>        
      </div>
    </a>
  );
}
