import { initTE } from 'tw-elements';

import type { Action } from 'svelte/action';

export const documentClass: Action<Document, string[]> = (document, classes) => {
  document.documentElement.classList.add(...classes);

  return {
    destroy() {
      document.documentElement.classList.remove(...classes);
    },
  };
};

export const addClass: Action<HTMLElement, string[]> = (node, classes) => {
  node.classList.add(...classes);

  return {
    destroy() {
      node.classList.remove(...classes);
    },
  };
};

export const twe = (components: any) => () => initTE({ ...components });