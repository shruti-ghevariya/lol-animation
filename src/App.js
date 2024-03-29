import Home from './routs';
import '../src/sass/global.scss';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
      <Home/>
      <Toaster/>
    </div>
  );
}

export default App;