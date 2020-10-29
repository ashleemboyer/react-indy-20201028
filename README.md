# Building an Accessible Modal @ React.Indy on October 28th, 2020

[![Netlify Status](https://api.netlify.com/api/v1/badges/8973b4ba-18f1-4bf1-b674-dba00e24e54d/deploy-status)](https://app.netlify.com/sites/react-indy-20201028/deploys)

## About the Talk

Have you ever tried interacting with a modal using only the keyboard? Oftentimes, you’ll find that it’s difficult or impossible to do so because of poor focus management. In this live-coding session, we’ll build an accessible modal component that covers how to contain focus, the necessary WAI-ARIA roles, states, and properties, and what to do when the modal closes.

## About Ashlee

Ashlee Boyer is a Disabled web developer, freelancer, and knitter that specializes in web accessibility. She [writes about it on her blog](https://ashleemboyer.com) and has [a live-coding series about building accessible React components](https://www.youtube.com/playlist?list=PLOmKTF_wUDoydvtwWrzEw7DZ9VboV51py) on Twitch. Her goal with teaching about accessibility is to show other developers it’s not as difficult as it’s made out to be and that just like any framework, technology, or algorithm we learn as developers, it takes time and practice.

## About this Repository

1. This project is a small Next.js app and was generated using Ashlee's [`nextjs-generator`](https://www.npmjs.com/package/nextjs-generator).

2. It's deployed on Netlify and can be found at [react-indy-20201028.netlify.app](https://react-indy-20201028.netlify.app/).

3. You can see in [this commit](https://github.com/ashleemboyer/react-indy-20201028/commit/f157a84600cf6421d6fd4061cae7b7d2856fa4e4) what code was written during the live-coding session.

## Resources

- The WAI-ARIA Authoring Practices Modal Dialog [design pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal) and [examples](https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html)
- The [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) package for checking accessibility rules on JSX elements
- The [axe-core](https://github.com/dequelabs/axe-core) accessibility engine for automated Web UI testing
- The [ChromeVox Classic Extension](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) for screenreader testing
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) for automated accessibility, PWA, and SEO testing
- But also: ["Building the most inaccessible site possible with a perfect Lighthouse score"](https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/)
