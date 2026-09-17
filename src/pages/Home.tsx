import { useState, type CSSProperties } from 'react'
import Layout from '../components/Layout'
import Icon from '../components/Icon'
import { PLATFORMS, currentPlatform } from '../platform'

const OFFICIAL_ARTICLE = 'https://uo.com/2024/09/25/ultima-online-classic-client-upgrade/'

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

export default function Home() {
  const [detected] = useState(currentPlatform)
  const primary = PLATFORMS.find((p) => p.id === detected)!
  const web = PLATFORMS.find((p) => p.id === 'web')!
  const others = PLATFORMS.filter((p) => p.id !== detected && p.id !== 'web')

  return (
    <Layout>
      <section className="hero container">
        <div className="hero__logo reveal">
          <img src="/cuologo.png" alt="ClassicUO" />
        </div>
        <a className="hero__eyebrow hero__eyebrow--official reveal" style={delay(120)} href={OFFICIAL_ARTICLE}>
          <Icon name="check-circle" /> Officially sanctioned for official shards
        </a>
        <h1 className="hero__title reveal" style={delay(200)}>
          The Ultima Online classic client, <em>reimagined</em>.
        </h1>
        <p className="hero__sub reveal" style={delay(280)}>
          A faithful open source implementation of the original client, and the <strong>only third-party
          client endorsed by Broadsword</strong> for use on official Ultima Online shards.
        </p>

        <div className="cta reveal" style={delay(380)}>
          <a href={primary.href} className="cta__btn cta__btn--primary">
            <Icon name={primary.icon} />
            <span>
              <span className="cta__label">
                {primary.id === 'web' ? primary.label : `Download for ${primary.label}`}
              </span>
              <span className="cta__meta">{primary.meta}</span>
            </span>
          </a>
          {primary.id !== 'web' && (
            <a href={web.href} className="cta__btn">
              <Icon name={web.icon} />
              <span>
                <span className="cta__label">{web.label}</span>
                <span className="cta__meta">{web.meta}</span>
              </span>
            </a>
          )}
        </div>

        <p className="others reveal" style={delay(460)}>
          {primary.id === 'web' ? 'Desktop launcher for' : 'Also available for'}{' '}
          {others.map((p, i) => (
            <span key={p.id}>
              <a href={p.href}>
                <Icon name={p.icon} /> {p.label}
              </a>
              {i < others.length - 1 && <span className="others__sep">·</span>}
            </span>
          ))}
        </p>

        <div className="hero__links reveal" style={delay(540)}>
          <a className="is-support" href="/support">
            <Icon name="heart" /> Support ClassicUO
          </a>
          <a href="https://github.com/ClassicUO/ClassicUO/wiki/Installation">
            <Icon name="book" /> Installation guide
          </a>
        </div>
      </section>
    </Layout>
  )
}
