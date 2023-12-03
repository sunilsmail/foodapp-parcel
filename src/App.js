import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import router from './Router';
import store from './store/store';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(<Provider store={store}><RouterProvider router={router} /></Provider>);