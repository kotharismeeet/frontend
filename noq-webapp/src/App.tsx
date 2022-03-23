import { BrowserRouter as Router } from 'react-router-dom';
import {BaseRouter} from './router';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
    return (<div className='center'>
        <Router>
            <BaseRouter />
        </Router>
        </div>);
}

export default App;
