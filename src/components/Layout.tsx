import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Header from './Header';
import Background3D from './Background3D';
import Footer from './Footer';
import NotificationToast from './ui/NotificationToast';
import Breadcrumb from './shared/Breadcrumb';

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
    <div className="h-screen h-[100dvh] text-slate-100 flex overflow-hidden selection:bg-amber-500/30 relative">
      <Background3D />
      
      {/* Subtle global noise overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Header />
      <NotificationToast />
      
      <main 
        ref={mainRef}
        className="flex-1 overflow-y-auto h-full scroll-smooth relative w-full"
      >
        <div className="container mx-auto px-4 pt-20 md:pt-24 pb-20 md:pb-32 max-w-6xl flex flex-col min-h-full">
          <Breadcrumb />
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Layout;