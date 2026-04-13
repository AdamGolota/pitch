import { useEffect } from "react";
import packageJson from "../package.json";


export function ClearCache({ children }) {
  useEffect(() => {
    fetch("/meta.json")
      .then((response) => response.json())
      .then((meta) => {
        if (meta.version !== packageJson.version) {
          refreshCacheAndReload();
        }
      });
  }, []);

  const refreshCacheAndReload = async () => {
    if (caches) {
      const names = await caches.keys();
      await Promise.all(names.map(name => caches.delete(name)))
    }
  };

  return children;
}
