class FootballPlayer extends HTMLElement {
  constructor() {
    super();

    this.addEventListener("click", () => {
      this.style.color = "green";
    });
  }

  connectedCallback() {
    const template = document.querySelector("template");
    const clone = document.importNode(template.content, true);
    this.appendChild(clone);
  }

  disconnectedCallback() {
    // called when the element is disconnected from the page
  }
}

customElements.define("football-player", FootballPlayer);
