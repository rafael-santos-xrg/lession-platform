import { DefaultUi, Player, Youtube } from "@vime/react";

import "@vime/core/themes/default.css";
import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_BY_SLUG = gql`
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

interface GetLessonsBySlug {
  lessons: {
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
  lessonSlug?: string;
}

export function Video(props: VideoProps) {
  const { data } = useQuery<GetLessonsBySlug>(GET_LESSONS_BY_SLUG, {
    variables: {
      slug: props?.lessonSlug,
    },
  });

  if (data) {
    return (
      <div className="bg-black flex justify-center mx-9 mt-8">
        <div className="h-full w-full max-h-[60vh] max-w-[1100px] aspect-video">
          <Player>
            <Youtube videoId={data.lessons.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
    );
  }
}
