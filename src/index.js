import ReactDOM from 'react-dom';

import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import Routes from './config/routes';

ReactDOM.render(
    Routes.getRoutes(),
    document.getElementById('root')
);
