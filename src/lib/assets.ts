import { existsSync } from "node:fs";
import { join } from "node:path";

// Server-only helpers to check whether an asset physically exists in /public.
// This lets the UI hide a CV button or fall back for a missing image instead of
// rendering a broken link. Call these from Server Components only.

/** Resolve a public-relative path (e.g. "/cv/file.pdf") to an absolute disk path. */
function publicPath(relativePath: string): string {
  const clean = relativePath.replace(/^\/+/, "");
  return join(process.cwd(), "public", clean);
}

/** Returns true when the file exists inside the /public directory. */
export function publicFileExists(relativePath: string | undefined): boolean {
  if (!relativePath) return false;
  try {
    return existsSync(publicPath(relativePath));
  } catch {
    return false;
  }
}
