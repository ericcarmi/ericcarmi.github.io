import { change_mode } from "./theme.js"
export class Header extends HTMLElement {
  connectedCallback() {


    const wrapper = document.createElement('div');

    wrapper.className = 'tfl-header';

    wrapper.innerHTML = `
    <div class="name-image">
      <div style="width:100%;display:flex;justify-content:space-evenly">
        <img alt="chain" height="120" src="/dragon.png" />
        <img alt="chain" height="120" src="/2e.png" />
        <img alt="chain" height="120" src="/3e.png" />
        <img alt="chain" height="120" src="/4e.png" />
        <img alt="chain" height="120" src="/5e.png" />
        <img alt="chain" height="120" src="/1e.png" />
      </div>
      <div style="display:flex;justify-content:space-evenly;align-items:center;gap:1rem;width:100%;">
        The Folding Lab
        <a href="/about.html">about</a>
        <a href="/blog.html">blog</a>
        <a href="https://www.github.com/ericcarmi">github</a>
        <a href="https://www.x.com/thefoldinglab">x/twitter</a>
        <button style="justify-self:flex-end;" id="mode-button"">dark</button>
      </div>
    </div>
    <hr />
    `;

    this.prepend(wrapper);

    const b = document.getElementById('mode-button');
    b.addEventListener('click', () => {
      change_mode();
    });
  }
}

customElements.define('tfl-header', Header);
