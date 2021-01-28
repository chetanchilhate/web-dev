class UserCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `Chetan Chilhate`;
    }
}

window.customElements.define('user-card', UserCard);