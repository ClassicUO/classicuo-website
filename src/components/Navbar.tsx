import { useState } from 'react'
import Icon from './Icon'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="/">
          ClassicUO
        </a>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'times' : 'bars'} />
        </button>
        <ul id="nav-links" className={`nav__links${open ? ' is-open' : ''}`}>
          <li>
            <a className="nav__link" href="https://github.com/ClassicUO/ClassicUO">
              <Icon name="github" /> GitHub
            </a>
          </li>
          <li>
            <a className="nav__link" href="https://discord.gg/VdyCpjQ">
              <Icon name="discord-alt" /> Discord
            </a>
          </li>
          <li>
            <a className="nav__link" href="/support">
              <Icon name="heart" /> Support
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
