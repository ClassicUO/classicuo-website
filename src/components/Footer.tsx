const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <div className="footer__brand">ClassicUO</div>
          <p>&copy; {year} ClassicUO. Open source, community driven.</p>
        </div>
        <p>
          This project does not distribute any copyrighted game assets. To run this client you
          need to legally obtain a copy of the Ultima Online Classic Client. ClassicUO is the only
          third-party client sanctioned for use on official shards; using any other custom client
          on official UO servers is strictly forbidden. We do not assume any responsibility for the
          usage of this client. Ultima Online&reg; &copy; {year} Electronic Arts Inc. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  )
}
