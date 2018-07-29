import ReactDOM from 'react-dom';

import './index.css';
import Routes from './config/routes';

ReactDOM.render(
    Routes.getRoutes(),
    document.getElementById('root')
);
