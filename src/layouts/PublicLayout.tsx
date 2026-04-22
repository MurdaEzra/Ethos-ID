import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

/**
 * PublicLayout - Layout for public marketing pages
 * Includes navbar and footer for main website navigation
 */
export function PublicLayout() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground selection:bg-ethos-teal selection:text-white overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
