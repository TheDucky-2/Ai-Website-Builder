import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Pricing from './pages/Pricing.tsx';
import Preview from './pages/Preview.tsx';
import MyProjects from './pages/MyProjects.tsx';
import Community from './pages/Community.tsx';
import ViewProject from './pages/ViewProject';
import Navbar from './components/Navbar.tsx';
import { Toaster} from 'sonner';
import AuthPage from './pages/auth/AuthPage.tsx';
import Settings from './pages/Settings.tsx';
import Loading from './pages/Loading.tsx';
import DemoGuide from './pages/DemoGuide.tsx';

const App = () => {

  const { pathname } = useLocation()
  
  const hideNavbar = pathname.startsWith('/projects/') 
                    && pathname !== '/projects' 
                    || pathname.startsWith('/view/')
                    || pathname.startsWith('/preview/')


  return (
    <div>
      <Toaster/>
      {!hideNavbar && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/projects/" element={<MyProjects/>}/>
        <Route path="/project/:projectId" element={<Projects/>}/>
        <Route path="/preview/:projectId" element={<Preview/>}/>
        <Route path="/preview/:projectId/:versionId" element={<Preview/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/view/:projectId" element={<ViewProject/>}/>
        <Route path="/auth/:pathname" element = {<AuthPage/>}/>
        <Route path="/account/settings" element = {<Settings/>}/>
        <Route path="/loading" element = {<Loading/>}/>
        <Route path="/demo-guide" element={<DemoGuide/>}/>
      </Routes>
    </div>
  )
}

export default App