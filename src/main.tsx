import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import { App } from './components/App.tsx';

import './index.css';


const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store} >
        <App />
    </Provider>
)
