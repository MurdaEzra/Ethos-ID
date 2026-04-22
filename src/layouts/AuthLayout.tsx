import { Outlet } from 'react-router-dom';
export function AuthLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
