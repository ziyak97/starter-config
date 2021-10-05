import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import useTheme from 'hooks/useTheme';
import { store } from 'store/store';

import 'styles/app.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useTheme();
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
