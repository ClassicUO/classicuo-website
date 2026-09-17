// Run: node src/platform.test.ts   (Node >= 23 strips types natively)
import assert from 'node:assert/strict'
import { detectPlatform } from './platform.ts'

const WIN = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/128.0 Safari/537.36'
const MAC = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Version/17.4 Safari/605.1.15'
const LINUX = 'Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0'
const ANDROID = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/128.0 Mobile Safari/537.36'
const IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1'
const IPAD_DESKTOP_UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Version/17.4 Safari/605.1.15'

assert.equal(detectPlatform(WIN), 'windows')
assert.equal(detectPlatform(MAC), 'mac')
assert.equal(detectPlatform(LINUX), 'linux')
assert.equal(detectPlatform(ANDROID), 'web')
assert.equal(detectPlatform(IPHONE), 'web')
assert.equal(detectPlatform(''), 'web')
assert.equal(detectPlatform('Mozilla/5.0 (unknown)', 'Windows'), 'windows')
assert.equal(detectPlatform(WIN, 'macOS'), 'mac') // UA-CH wins over UA string
// ponytail: iPad in desktop mode is indistinguishable from macOS by UA; accepted, it gets the mac download link
assert.equal(detectPlatform(IPAD_DESKTOP_UA), 'mac')

console.log('platform.test.ts OK')
