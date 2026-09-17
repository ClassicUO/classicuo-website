export type PlatformId = 'windows' | 'linux' | 'mac' | 'web'

export type Platform = {
  id: PlatformId
  icon: string
  label: string
  meta: string
  href: string
}

const RELEASES = 'https://github.com/ClassicUO/deploy/releases/latest/download'

export const PLATFORMS: Platform[] = [
  { id: 'web', icon: 'cloud', label: 'Play in browser', meta: 'No download needed', href: 'https://play.classicuo.org/' },
  { id: 'windows', icon: 'windows', label: 'Windows', meta: 'x64 · launcher .zip', href: `${RELEASES}/ClassicUOLauncher-win-x64-release.zip` },
  { id: 'linux', icon: 'linux', label: 'Linux', meta: 'x64 · launcher .zip', href: `${RELEASES}/ClassicUOLauncher-linux-x64-release.zip` },
  { id: 'mac', icon: 'apple', label: 'macOS', meta: 'x64 · launcher .zip', href: `${RELEASES}/ClassicUOLauncher-osx-x64-release.zip` },
]

/** Pure: pass a UA string (and optional UA-CH platform) and get a platform id. Mobile/unknown -> 'web'. */
export function detectPlatform(ua: string, uaPlatform?: string): PlatformId {
  const p = (uaPlatform ?? '').toLowerCase()
  if (p === 'windows') return 'windows'
  if (p === 'macos') return 'mac'
  if (p === 'linux') return 'linux'
  const u = ua.toLowerCase()
  if (/android|iphone|ipad|ipod|mobile/.test(u)) return 'web'
  if (/windows/.test(u)) return 'windows'
  if (/mac os|macintosh/.test(u)) return 'mac'
  if (/linux|x11|cros/.test(u)) return 'linux'
  return 'web'
}

export function currentPlatform(): PlatformId {
  if (typeof navigator === 'undefined') return 'web'
  // ponytail: userAgentData is Chromium-only; UA string fallback covers the rest
  const uaData = (navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData
  return detectPlatform(navigator.userAgent, uaData?.platform)
}
