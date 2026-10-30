/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_ALLOW_INDEXING?: string;
  readonly VITE_LINKEDIN_URL?: string;
  readonly VITE_YOUTUBE_URL?: string;
  readonly VITE_X_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
