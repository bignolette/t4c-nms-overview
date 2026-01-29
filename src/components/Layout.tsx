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
  const location = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="h-screen h-[100dvh] text-slate-100 flex overflow-hidden selection:bg-amber-500/30 relative bg-[#02040a]">
      <Scene3D />
      
      {/* Subtle global noise overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Header />
      
      <main 
        ref={mainRef}
        className="flex-1 overflow-y-auto h-full scroll-smooth relative w-full"
      >
        <div className="container mx-auto px-4 pt-20 md:pt-24 pb-20 md:pb-32 max-w-6xl flex flex-col min-h-full">
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