
const template = `
  <style>
    :host {
      display: flex;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;

      --icon-width: 32px;
      --pane-count: 1;
    }

    ::slotted(*) {
      flex: 0 0 calc(100% - var(--icon-width) * var(--pane-count));
      scroll-snap-align: end;
      scroll-margin-right: var(--icon-width);

      position: -webkit-sticky;
      position: sticky;
      left: 0;
      right: calc(var(--icon-width) * 2 - 100%);

      overflow-y: auto;

      transition: transform 1s;
    }

    ::slotted(:last-child) {
      left: var(--icon-width);
      flex-basis: calc(100% - var(--icon-width));
      scroll-margin-right: 0;
    }
  </style>
  <slot></slot>
`;

export default class CascadingHamburgerMenu extends HTMLElement {

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = template;
    this.scrollLeft = this.scrollWidth;
  }
}
