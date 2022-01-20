class MyHeader extends HTMLElement {
  connectedCallback() {
    const page = this.getAttribute('current');
    this.innerHTML = `
      <header>
        <img src="" alt="">
        <nav>
          <ul>
            <li class="${page === 'home' ? 'active' : ''}"><a href="index.html">Accueil</a></li>
            <li class="${page === 'contact' ? 'active' : ''}"><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </header>
    `
  }
}

export default MyHeader;