import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import Textform from './components/Textform';
import Darkmode from './components/Darkmode';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hoockstate from './components/Hoockstate';
import Nofound from './components/Nofound';
import Fetures from './components/Fetures';
import New from './components/New';
import Users from './components/Users';
import UsersDetail from './components/UsersDetail';
import UseEffect from './components/UseEffect';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar Aboutus="About Us" />
        <Alert name="Offer closes soon..........." />
        <Routes>
          <Route path="too" element={<Darkmode />}>
          </Route>
          <Route path="Textform" element={<Textform heading="Enter some Text Here" />}>
          </Route>
          <Route path="Count" element={<Hoockstate />}>
            <Route path="Fetures" element={<Fetures />} />
            <Route path="New" element={<New />} />
          </Route>
          <Route path="Darkmode" element={<Darkmode />}> </Route>
          <Route path='Todo' element={<Todo />}></Route>
          <Route path='User' element={<Users />}></Route>
          <Route path='User/:userID' element={<UsersDetail />}></Route>
          <Route path='UseEffect' element={<UseEffect />}></Route>
          <Route path='*' element={<Nofound />}></Route>
        </Routes >
      </BrowserRouter>
    </>
  );
}

export default App;
