const tmeplate = document.createElement('template');

tmeplate.innerHTML = `
<style>
    h3 {
        color: coral;
    }
</style>
<div class="user-card">
    <h3></h3>
</div>
`;


class UserCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(tmeplate.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');        
    }
}

window.customElements.define('user-card', UserCard);