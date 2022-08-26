import { gql, useQuery } from "@apollo/client";
import { Button } from "./Button";
import { Card } from "./Card";
import { Video } from "./Video";

const GET_LESSONS_BY_SLUG_QUERRY = gql`
  query GetLessonsBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      description
      videoId
      title
      teacher {
        avatarURL
        bio
        name
      }
    }
  }
`;

interface GetLessonsBySlugQuerryResponse {
  lesson: {
    description: string;
    videoId: string;
    title: string;
    teacher: {
      avatarURL: string;
      bio: string;
      name: string;
    };
  };
}

interface VideoProps {
  lessonSlug: string;
}

export function Main(props: VideoProps) {
  const { data } = useQuery<GetLessonsBySlugQuerryResponse>(GET_LESSONS_BY_SLUG_QUERRY, {
    variables: {
      slug: props?.lessonSlug
    }
  })
  if (!data){
    return <div className="flex-1">
    </div>
  }
  return (
    <div className="flex-1">
      <Video sluglesson={data?.lesson?.videoId}/>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex gap-4 align-start">
          <div className="flex-1">
            <h1 className="text-2xl font-bold ">
              {data?.lesson?.title}
            </h1>
            <p className="mt-4 leading-relaxed text-gray-200">
            {data?.lesson?.description}
            </p>   
          </div>
            <div className="flex flex-col gap-4">
              < Button variant="primary" />
              < Button variant="secondary" />
            </div>         
        </div>
        <div className="flex mt-6 gap-4 items-center">
          <img src={data?.lesson?.teacher?.avatarURL} className="rounded-full border-2 border-blue-500 h-16" />
          <div className="leading-relaxed">
            <strong className="font-bold text-2xl block">
            {data?.lesson?.teacher?.name}
            </strong>
            <span className="text-gray-200 text-sm block">
            {data?.lesson?.teacher?.bio}
            </span>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2 mb-20">
          < Card variant="primary" />
          < Card variant="secondary" />
        </div>
      </div>
    </div>
  );
}
