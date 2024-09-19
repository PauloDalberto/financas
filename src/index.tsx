import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './routes/Routes';

import { AppProvider } from './contexts';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppProvider>
    <Router>
      <Header />
      <RouterComponent />
    </Router>
  </AppProvider>
);

reportWebVitals();
