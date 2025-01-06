import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type NavButtonProps = {
  icon: LucideIcon;
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
};

export default function NavButton({
  icon: Icon,
  label,
  href,
  active = false,
  onClick,
}: NavButtonProps) {
  return (
    <Button
      variant={active ? "secondary" : "ghost"}
      size="icon"
      aria-label={label}
      title={label}
      className="rounded-full"
      asChild
    >
      {href ? (
        <Link href={href}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
}
