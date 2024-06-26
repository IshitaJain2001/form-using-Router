
import Main from "./Main";
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router >
     <Main/>
     <ToastContainer />
    </Router>
  );
}

export default App;
