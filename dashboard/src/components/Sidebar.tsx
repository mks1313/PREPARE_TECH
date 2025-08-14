import { NavLink } from 'react-router-dom';

const link = 'block px-3 py-2 rounded-lg hover:bg-slate-100';
const active = 'bg-slate-200 font-medium';

export default function SideBar() {
    return (
        <aside className="hidden md:block w-56 border-r p-4">
            <nav className='space-y-1'>
                <NavLink to="/dashboard" className={({isActive}) => `${link} ${isActive ? active : ''}`}>Dashboard</NavLink>
                <NavLink to="/devices" className={({isActive}) => `${link} ${isActive ? active : ''}`}>Devices</NavLink>
                <NavLink to="/readings" className={({isActive}) => `${link} ${isActive ? active : ''}`}>Reading</NavLink>
                <NavLink to="/settings" className={({isActive}) => `${link} ${isActive ? active : ''}`}>Settings</NavLink>
            </nav>
        </aside>
    );
}