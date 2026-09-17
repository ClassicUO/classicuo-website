import type { CSSProperties } from 'react'
import Layout from '../components/Layout'
import Icon from '../components/Icon'

const tiers = [
  {
    icon: 'paypal',
    name: 'PayPal',
    desc: 'One-off donation. Quick and simple.',
    cta: 'Donate',
    href: 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=9ZWJBY6MS99D8',
  },
  {
    icon: 'coffee',
    name: 'Buy Me a Coffee',
    desc: 'One-off or monthly. No account needed.',
    cta: 'Buy a coffee',
    href: 'https://buymeacoffee.com/andreakarasho',
  },
  {
    icon: 'patreon',
    name: 'Patreon',
    desc: 'Recurring support with community perks.',
    cta: 'Join',
    href: 'https://www.patreon.com/classicuo',
  },
]

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

export default function Support() {
  return (
    <Layout>
      <section className="support container">
        <div className="support__head">
          <span className="hero__eyebrow reveal">Keep the shards alive</span>
          <h1 className="support__title reveal" style={delay(100)}>
            <Icon name="heart" /> Support ClassicUO
          </h1>
          <p className="support__text reveal" style={delay(200)}>
            ClassicUO has been in active development for years, driven by passion for this game.
            Like every serious open source project it needs financial support to keep improving.{' '}
            <strong>Your contributions keep this project alive.</strong>
          </p>
        </div>

        <div className="tiers reveal" style={delay(320)}>
          {tiers.map((t) => (
            <a key={t.name} href={t.href} className="tier">
              <Icon name={t.icon} />
              <span className="tier__name">{t.name}</span>
              <span className="tier__desc">{t.desc}</span>
              <span className="tier__cta">{t.cta}</span>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  )
}
