import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import '../styles/global.scss';

library.add(fas);

export default function MyApp({  Component, pageProps }) {
  return <Component {...pageProps} />;
}
