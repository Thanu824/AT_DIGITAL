import {BrowserRouter} from 'react-router-dom'
import Navbar from'./Components/Navbar';
import Photo from'./Components/Photo';
import Body1 from'./Components/Body1';
import Body2 from'./Components/Body2';
import Footer from'./Components/Footer';



function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
       <Photo/>
       <div></div>
       <Body1/>
       <Body2/>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;










