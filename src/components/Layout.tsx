import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Scene3D from './Scene3D';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="h-screen text-slate-100 flex overflow-hidden selection:bg-amber-500/30 relative">
      <Scene3D />
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Header />
      <main 
        ref={mainRef}
        className="flex-1 overflow-y-auto h-full scroll-smooth relative w-full"
      >
        <div className="container mx-auto px-4 pt-24 pb-32 max-w-6xl flex flex-col min-h-full">
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Layout;