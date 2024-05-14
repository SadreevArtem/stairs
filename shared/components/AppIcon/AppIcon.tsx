import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import { IconType } from "./types";
import clsx from "clsx";


const SocialVk = dynamic(() => import("./components/SocialVk").then((module) => module.SocialVk), {
  ssr: false
});
const SocialTg = dynamic(() => import("./components/SocialTg").then((module) => module.SocialTg), {
  ssr: false
});
const SocialOk = dynamic(() => import("./components/SocialOk").then((module) => module.SocialOk), {
  ssr: false
});
const SocialYoutube = dynamic(
  () =>
    import("./components/SocialYoutube").then((module) => module.SocialYoutube),
  {
    ssr: false,
  }
);


type Props = {
  type: IconType;
  className?: string;
};

const icons: Record<IconType, (className: string) => ReactNode> = {

  "social-vk": (className) => <SocialVk className={className} />,
  "social-ok": (className) => <SocialOk className={className} />,
  "social-tg": (className) => <SocialTg className={className} />,
  "social-youtube": (className) => <SocialYoutube className={className} />,
  
};

export const AppIcon: React.FC<Props> = ({ type, className = "" }) => {
  return <>{icons[type](clsx(className, "shrink-0"))}</>;
};
