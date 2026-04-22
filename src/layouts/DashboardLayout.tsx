import { Outlet, Link, useLocation } from 'react-router-dom';
import { Shield, Home, ShieldCheck, Wallet, Settings, LogOut, Bell } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

export function DashboardLayout() {
  const location = useLocation();
  usePageTitle('Dashboard | EthosID');

  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: <Home className="w-5 h-5" /> },
    { name: 'Identity & KYC', path: '/dashboard/identity', icon: <ShieldCheck className="w-5 h-5" /> },
    { name: 'Wallet & Funding', path: '/dashboard/wallet', icon: <Wallet className="w-5 h-5" /> },
    { name: 'Settings', path: '/dashboard/settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-ethos-slate/5 flex flex-col md:flex-row">
      {/* Sidebar Desktop */}
      <aside className="w-64 bg-white border-r border-ethos-slate/10 hidden md:flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-ethos-slate/10">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-ethos-blue text-white p-1.5 rounded-lg shadow-sm">
              <Shield className="w-6 h-6" />
            </div>
            <span className="font-heading font-bold text-xl text-ethos-navy">EthosID</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (location.pathname.startsWith(item.path) && item.path !== '/dashboard');
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                  isActive 
                    ? 'bg-ethos-blue/10 text-ethos-blue' 
                    : 'text-ethos-slate hover:bg-ethos-slate/5 hover:text-ethos-navy'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-ethos-slate/10">
          <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-ethos-slate hover:text-rose-500 transition-colors font-medium rounded-xl hover:bg-rose-50">
            <LogOut className="w-5 h-5" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        {/* Topbar */}
        <header className="bg-white border-b border-ethos-slate/10 py-4 px-6 md:px-8 flex items-center justify-between sticky top-0 z-20">
          <div>
            <h1 className="font-heading font-bold text-xl text-ethos-navy hidden md:block">
              Welcome back, John
            </h1>
            {/* Mobile Header Branding */}
            <div className="md:hidden flex items-center gap-2">
              <div className="bg-ethos-blue text-white p-1.5 rounded-lg shadow-sm">
                <Shield className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-xl text-ethos-navy">EthosID</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-ethos-slate hover:text-ethos-blue transition-colors relative">
              <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 rounded-full bg-ethos-blue/10 flex items-center justify-center text-ethos-blue font-bold text-sm border border-ethos-blue/20">
              JD
            </div>
          </div>
        </header>

        {/* Dynamic Nested Content */}
        <main className="p-6 md:p-8 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
