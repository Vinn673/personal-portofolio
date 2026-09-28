import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "quiet";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  /** Trailing decorative icon (text or icon component). */
  icon?: ReactNode;
  /** Force external anchor behavior (new tab). Auto-detected for http/mailto. */
  external?: boolean;
  className?: string;
  download?: boolean;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "button button-primary",
  quiet: "button button-quiet",
};

/**
 * A link styled as a button using the existing global .button classes.
 * Uses next/link for internal routes and a plain anchor for external/mailto.
 */
export function Button({
  href,
  children,
  variant = "primary",
  icon,
  external,
  className,
  download,
}: ButtonProps) {
  const classes = `${variantClass[variant]}${className ? ` ${className}` : ""}`;
  const isExternal =
    external ?? (/^https?:\/\//.test(href) || href.startsWith("mailto:"));

  const content = (
    <>
      {children}
      {icon ? <span aria-hidden="true">{icon}</span> : null}
    </>
  );

  if (isExternal || download) {
    return (
      <a
        className={classes}
        href={href}
        download={download}
        {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
