/**
 * Fixed decorative background layers rendered behind all site content.
 * Purely visual (aria-hidden). Provides depth via a gradient mesh, a subtle
 * grid, and soft blurred accent blobs. Animation is gated by
 * prefers-reduced-motion in globals.css.
 */
export function Background() {
  return (
    <div className="bg-layers" aria-hidden="true">
      <div className="bg-gradient" />
      <div className="bg-grid" />
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />
      <div className="bg-noise" />
    </div>
  );
}
