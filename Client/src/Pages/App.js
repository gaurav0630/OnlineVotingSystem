import Home from '../Components/Home';
import Header from '../Components/Header';
import Contact from '../Components/Contact';
import About from '../Components/About_1';
import Login from '../Components/Login';
import AdminLogin from '../Components/Admin_Login';
import OTPConfirm from '../Components/OTP_Confirmation';
import UserDashboard from '../Components/User_Dashboard';
import SideNavbar from '../Components/Sidenav';
import Authentication from '../Components/Authentication';
import CandidateList from '../Components/Candidates_list';
import ElectionList from '../Components/Election_list';
import Polling from '../Components/Polling';
import '../assets/CSS/OTP_Confirmation.css';
import '../assets/CSS/Candidate_List.css';
import '../assets/CSS/Election_list.css';
import '../assets/CSS/Authenticate.css';
import '../assets/CSS/Polling.css';
import '../assets/CSS/SideNavbar.css';
import '../assets/CSS/Topbar.css';
import '../assets/CSS/Dashboard.css';
import '../assets/CSS/index.css';
import '../assets/CSS/login.css';
import '../assets/CSS/Admin_Login.css';
import { Route, Routes} from "react-router-dom";

function App() {
  return (
   <Routes>
      <Route path='Login' element={<><Login></Login></>} />
      <Route path='AdminLogin' element={<><AdminLogin></AdminLogin></>}></Route>
      <Route path='OTP_Confirm' element={<><OTPConfirm></OTPConfirm></>}></Route>
      <Route path='UserDashboard' element={<><SideNavbar></SideNavbar><UserDashboard></UserDashboard></>}></Route>
      <Route path='Authentication' element={<><SideNavbar></SideNavbar><Authentication></Authentication></>}></Route>
      <Route path='CandidateList' element={<><SideNavbar></SideNavbar><CandidateList></CandidateList></>}></Route>
      <Route path='Polling' element={<><SideNavbar></SideNavbar><Polling></Polling></>}></Route>
      <Route path='ElectionList' element={<><SideNavbar></SideNavbar><ElectionList></ElectionList></>}></Route>
      <Route path='/' element={<><Header></Header><Home></Home><About></About><Contact></Contact></>} />
      
    </Routes>
     
  );
}

export default App;

