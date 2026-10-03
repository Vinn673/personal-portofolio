import type { SVGProps } from "react";

// Lightweight inline-SVG icon set. All icons use `currentColor` so they inherit
// text color and transition smoothly on hover. No external icon dependency.

type IconProps = SVGProps<SVGSVGElement> & {
  /** Accessible label. If omitted, the icon is treated as decorative. */
  title?: string;
};

function baseProps(title?: string) {
  return {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": title ? undefined : true,
    role: title ? "img" : undefined,
  };
}

export function GitHubIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} fill="currentColor" stroke="none" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.34 9.34 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function LinkedInIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} fill="currentColor" stroke="none" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function EmailIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} {...props}>
      {title ? <title>{title}</title> : null}
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function WhatsAppIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} fill="currentColor" stroke="none" {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M12.02 2C6.6 2 2.2 6.4 2.2 11.82c0 1.9.5 3.68 1.4 5.23L2 22l5.08-1.56a9.78 9.78 0 0 0 4.94 1.34h.01c5.42 0 9.82-4.4 9.82-9.82C21.85 6.4 17.44 2 12.02 2Zm0 17.96h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.06.94.98-2.98-.2-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.5 3.66-8.17 8.17-8.17 2.18 0 4.23.85 5.77 2.4a8.11 8.11 0 0 1 2.39 5.78c0 4.5-3.66 8.16-8.16 8.16Zm4.48-6.12c-.25-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.26 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.45-.59 1.65-1.17.2-.57.2-1.06.14-1.17-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

export function InstagramIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} {...props}>
      {title ? <title>{title}</title> : null}
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LineIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M21 10.5c0-4.14-4.15-7.5-9-7.5s-9 3.36-9 7.5c0 3.71 3.29 6.82 7.73 7.41.3.06.71.2.81.46.09.24.06.6.03.84 0 0-.11.65-.13.79-.04.24-.19.93.82.51 1.01-.43 5.42-3.19 7.4-5.47C20.4 14.63 21 12.67 21 10.5Z" />
      <path
        d="M7.2 8.9v3.6M9.4 12.5H7.2M11 8.9v3.6M13 8.9v3.6l2.4-3.6v3.6M16.9 8.9h1.9M16.9 12.5h1.9M16.9 8.9v3.6"
        strokeWidth="1.1"
      />
    </svg>
  );
}

export function ArrowUpRightIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRightIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export function PlayIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M6 4.5v15l13-7.5-13-7.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ExternalIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export function CodeIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="m8 6-6 6 6 6" />
      <path d="m16 6 6 6-6 6" />
    </svg>
  );
}

export function ToolIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4 2.6-2.6Z" />
    </svg>
  );
}

export function DatabaseIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} {...props}>
      {title ? <title>{title}</title> : null}
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  );
}

export function SparkIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinIcon({ title, ...props }: IconProps) {
  return (
    <svg {...baseProps(title)} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
