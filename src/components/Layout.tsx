import Sidebar from './Sidebar';
import Scene3D from './Scene3D';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen text-slate-100 flex overflow-hidden selection:bg-amber-500/30 relative">
      <Scene3D />
      <Sidebar />
      <main className="flex-1 overflow-y-auto h-screen scroll-smooth">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;