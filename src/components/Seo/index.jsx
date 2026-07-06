import { useEffect } from "react";

export const SITE_URL = "https://www.loodgieterjuffermans.nl";

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Updates the document head per route (title, description, canonical,
 * Open Graph). The defaults for the homepage live statically in index.html
 * so crawlers see them without JavaScript; this keeps them in sync when
 * navigating client-side.
 */
export default function Seo({ title, description, path = "/", noindex = false }) {
  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", `${SITE_URL}${path}`);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${path}`);

    const robots = document.head.querySelector('meta[name="robots"]');
    if (noindex) {
      upsertMeta("name", "robots", "noindex");
    } else if (robots) {
      robots.remove();
    }
  }, [title, description, path, noindex]);

  return null;
}
