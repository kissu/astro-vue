import { LitElement, html } from 'lit';
import '@lion/ui/define/lion-tooltip.js';

export class MyElement extends LitElement {
  render() {
    return html`<style>
      .demo-tooltip-invoker {
        margin: 50px;
      }
    </style>
    <lion-tooltip has-arrow>
      <button slot="invoker" class="demo-tooltip-invoker">
        <slot>Placeholder 🤔</slot>
      </button>
      <div slot="content">This is a tooltip</div>
    </lion-tooltip>`;
  }
}

customElements.define('my-element', MyElement);
