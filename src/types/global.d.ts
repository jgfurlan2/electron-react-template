export {}

declare global {
  const electron: typeof window.electron

  interface Window {
    electron: typeof import('../../electron/preload').api
  }
}
