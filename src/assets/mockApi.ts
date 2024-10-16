import { IWuAppHeaderProps } from "@npm-questionpro/wick-ui-lib";
import { IFormData } from "./model";

export const MockProducts: IWuAppHeaderProps["catagories"] = [
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    desc: "This is a demo product",
  },
  {
    name: "Angular",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png",
    desc: "This is a demo product",
  },
  {
    name: "Vue",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    desc: "This is a demo product",
  },
  {
    name: "Svelte",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
    desc: "This is a demo product",
  },
];

export const DefaultFormData: IFormData = {
  name: "Sheldon Cooper",
};

export const JSFrameworks = [
  { label: "React", value: "react" },
  { label: "Vue.js", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Next.js", value: "nextjs" },
  { label: "Nuxt.js", value: "nuxtjs" },
  { label: "Gatsby", value: "gatsby" },
  { label: "Ember.js", value: "ember" },
  { label: "Backbone.js", value: "backbone" },
  { label: "Meteor", value: "meteor" },
  { label: "Preact", value: "preact" },
  { label: "Alpine.js", value: "alpinejs" },
  { label: "Express.js", value: "express" },
  { label: "NestJS", value: "nestjs" },
  { label: "Electron", value: "electron" },
  { label: "Ionic", value: "ionic" },
  { label: "Quasar", value: "quasar" },
  { label: "Redux", value: "redux" },
  { label: "Mithril", value: "mithril" },
  { label: "Aurelia", value: "aurelia" },
  { label: "Stencil", value: "stencil" },
];
