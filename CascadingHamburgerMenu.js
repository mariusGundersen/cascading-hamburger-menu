
const ACCELERATION = 2400;
const template = `
  <style>
    :host {
      display: flex;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;

      --icon-width: 32px;
      --cascade: 1;
      --pane-count: 5;
    }

    ::slotted(*) {
      flex: 0 0 calc(100% - var(--icon-width) * var(--pane-count));
      scroll-snap-align: end;

      position: sticky;
      left: 0;
      right: calc(var(--icon-width) * 2 - 100%);

      overflow-y: auto;

      transition: transform 1s;
    }

    ::slotted(:nth-child(2)) {
      --offset: calc(var(--icon-width) * var(--cascade) * 1);
      transform: translateX(var(--offset));
      /*flex-basis: calc(100% - var(--offset));*/
    }

    ::slotted(:nth-child(3)) {
      --offset: calc(var(--icon-width) * var(--cascade) * 2);
      transform: translateX(var(--offset));
      /*flex-basis: calc(100% - var(--offset));*/
    }

    ::slotted(:nth-child(4)) {
      --offset: calc(var(--icon-width) * var(--cascade) * 3);
      transform: translateX(var(--offset));
      /*flex-basis: calc(100% - var(--offset));*/
    }

    ::slotted(:nth-child(5)) {
      --offset: calc(var(--icon-width) * var(--cascade) * 4);
      transform: translateX(var(--offset));
      /*flex-basis: calc(100% - var(--icon-width) * 5);*/
    }

    ::slotted(:last-child) {
      left: var(--icon-width);
      transform: translateX(0);
      flex-basis: calc(100% - var(--icon-width));
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

    this.addEventListener('scroll', e => this.handleScroll(e), false);
  }

  handleScroll(e) {
    //this.style.setProperty('--cascade', this.scrollLeft + this.clientWidth > this.scrollWidth - this.clientWidth ? 0 : 1);
  }
}
