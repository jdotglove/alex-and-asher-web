/// <reference types="vite/client" />

import 'vite/client'
interface ImportMetaEnv {
  readonly VITE_SERVER_API_BASE_URL: string
  readonly VITE_SERVER_API_KEY: string
  // Add more environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
