import { Typography } from "@jtwjs/ui";
import { cn } from "@jtwjs/utils";
import Image from "next/image";

import { COPYRIGHT, OUTBOUNDS } from "@/static/footer";

export default function Footer() {
  return (
    <footer className={cn("container h-footer px-4 font-inter")}>
      <div
        className={cn(
          "flex justify-between items-center border-t border-border pt-12 pb-16"
        )}
      >
        <div className={cn("flex items-center gap-x-4")}>
          <Image
            src="/images/logo.png"
            width="80"
            height="48"
            alt="jtwjs blog"
          />
          <div>
            <Typography weight="semibold">Jtwjs BLOG</Typography>
            <Typography className={cn("text-tertiary")} variant="xs">
              {COPYRIGHT}
            </Typography>
          </div>
        </div>
        <address className="self-end">
          <ul className={cn("flex")}>
            {OUTBOUNDS.map(({ label, link, Icon }) => (
              <li key={label} className={cn("px-2")}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">{label}</span>
                  {<Icon size="20" className={cn("dark:fill-white")} />}
                </a>
              </li>
            ))}
          </ul>
        </address>
      </div>
    </footer>
  );
}
