import ReactDOM from 'react-dom';

import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import Routes from './config/routes';

const routes = new Routes();
const renderRoutes = () => routes.getRoutes().then(routes => {
    ReactDOM.render(
        routes,
        document.getElementById('root')
    );
});

renderRoutes();

// check every 10 seconds if it is time to update (we update at 6AM, 12PM and 15PM)
setInterval(() => {
    renderRoutes();
}, 5 * 1000);






