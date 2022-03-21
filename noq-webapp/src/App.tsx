import { BrowserRouter as Router } from 'react-router-dom';
import {BaseRouter} from './router';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (<Router>
        <BaseRouter />
    </Router>);
}

export default App;
