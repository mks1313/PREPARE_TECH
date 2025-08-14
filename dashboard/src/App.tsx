import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import Devices from './routes/Devices';
import Readings from './routes/Readings';
import Settings from './routes/Settings';
import Shell from './components/Shell';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Shell />}>
      <Route index element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/devices" element={<Devices />} />
      <Route path="/readings" element={<Readings />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<div>404</div>} />
      </Route> 
    </Routes>
    </BrowserRouter>
  )
}