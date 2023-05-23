import { Typography } from "@jtwjs/ui";
import { cn, isMatchRoute } from "@jtwjs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  path: string;
}

export default function NavItem({ label, path }: NavItemProps) {
  const pathname = usePathname();

  const isCurrentPage = isMatchRoute(path, pathname);

  return (
    <li
      key={path}
      className={cn(
        "w-full border-b border-border last:border-0 lg:border-0 py-5 lg:pl-2.5 lg:py-0 lg:pr-5"
      )}
    >
      <Link href={path} aria-current={isCurrentPage ? "page" : "false"}>
        <Typography
          className={cn(
            "font-inter hover:text-brand hover:transition font-medium"
          )}
          as="span"
          variant="sm"
          weight="semibold"
        >
          {label}
        </Typography>
      </Link>
    </li>
  );
}
