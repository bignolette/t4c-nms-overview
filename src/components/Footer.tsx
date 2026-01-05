import { Link } from 'react-router-dom';
import { ShieldCheck, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 pb-12 border-t border-slate-800/50 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-medium">
            © {currentYear} T4C NMS Overview • v1.0.0
          </p>
          <p className="text-xs flex items-center gap-1">
            Fait avec <Heart size={10} className="text-rose-500 fill-current" /> par <span className="text-slate-400 font-bold">Bignole</span>
          </p>
        </div>

        <div className="flex items-center gap-8">
          <Link 
            to="/legal" 
            className="hover:text-amber-500 transition-colors flex items-center gap-2 group"
          >
            <ShieldCheck size={16} className="text-slate-600 group-hover:text-amber-500 transition-colors" />
            <span>Mentions Légales</span>
          </Link>
          
          <div className="hidden md:block w-px h-4 bg-slate-800" />
          
          <p className="text-xs max-w-[300px] text-center md:text-right leading-tight italic">
            Projet communautaire non-officiel lié au serveur T4C NMS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
