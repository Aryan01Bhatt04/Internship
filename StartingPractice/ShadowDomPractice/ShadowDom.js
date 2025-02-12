class customP extends HTMLElement{
    connectedCallback(){
        const shadow = this.attachShadow({mode : 'open'});
        shadow.innerHTML = `
        <p class="textContents>
            <slot></slot>  
        </p>`;

    }
}

customElements.define('custom-P',customP);