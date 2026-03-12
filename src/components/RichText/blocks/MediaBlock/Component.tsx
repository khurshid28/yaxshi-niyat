import type { StaticImageData } from "next/image";

import React from "react";

import type { MediaBlock as MediaBlockProps } from "@/payload-types";
import { Media } from "@/components/Media";

type Props = MediaBlockProps & {
  className?: string;
  staticImage?: StaticImageData;
  disableInnerContainer?: boolean;
};

export const MediaBlock: React.FC<Props> = (props) => {
  const { media } = props;

  return (
    <div className="h-[260px]">
      <Media
        imgClassName={`object-contain w-full h-full`}
        className={`w-full h-full`}
        resource={media}
        priority
      />
    </div>
  );
};
