import {LitElement, html} from 'lit'

class MyElement extends LitElement {
    render(){
        return html`
            <p>hello my element</p>
        `;
    }
}


customElements.define('my-element', MyElement);