import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Doctors from './pages/Doctors/Doctors'
import Patients from './pages/Patients/Patients'
import Services from './pages/Services/Services'
import ServiceDetail from './pages/ServiceDetail/ServiceDetail'
import Contacts from './pages/Contacts/Contacts'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import Accessibility from './pages/Accessibility/Accessibility'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/accessibility/*" element={<Accessibility />} />
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  )
}

export default App

