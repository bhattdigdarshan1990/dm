/**
 * Utility to get the correct path for assets in the public folder,
 * taking into account the Vite base path (important for GitHub Pages).
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL || './';
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // If base is './', we just return the path
  if (base === './') return cleanPath;
  
  // Ensure base ends with a slash and join
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${cleanPath}`;
}
