import { useState, useRef } from 'react';
import { Download, Upload, HelpCircle, Info, X, Bell } from 'lucide-react';
import { useData } from '../context/DataContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { saveDataToFile, loadDataFromFile } = useData();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [modal, setModal] = useState<{ show: boolean; title: string; message: string; onConfirm?: () => void; type: 'confirm' | 'info'; isSave?: boolean }>(
    { show: false, title: '', message: '', type: 'info' }
  );
  const [saveFilename, setSaveFilename] = useState('');
  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const showConfirm = (title: string, message: string, onConfirm: () => void, isSave: boolean = false) => {
    if (isSave) {
        setSaveFilename(`t4c_nms_backup_${new Date().toISOString().split('T')[0]}`);
    }
    setModal({ show: true, title, message, onConfirm, type: 'confirm', isSave });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
        await loadDataFromFile(file);
        showNotification("Données chargées avec succès !");
    } catch (err) {
        showNotification("Erreur lors du chargement des données.", 'error');
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <>
      <header className="fixed top-0 right-0 left-0 h-20 z-30 pointer-events-none flex items-start justify-end px-8 pt-6">
        <div className="flex items-center gap-3 pointer-events-auto bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-1.5 rounded-2xl shadow-2xl">
          <button 
            onClick={() => showConfirm(
                "Sauvegarder les données ?", 
                "Choisissez un nom pour votre fichier de sauvegarde.", 
                () => {
                    saveDataToFile(saveFilename);
                    setModal(prev => ({ ...prev, show: false }));
                },
                true
            )}
            className="btn-secondary px-4 py-2 text-[10px] bg-slate-950 hover:text-amber-500"
            title="Sauvegarder"
          >
            <Download size={18} className="group-hover:scale-110 transition-transform" />
            <span className="font-black uppercase tracking-wider hidden sm:inline">Sauvegarder</span>
          </button>
          
          <input 
            id="load-backup-input"
            name="load-backup"
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept=".json" 
            aria-label="Charger une sauvegarde JSON"
            onChange={handleFileChange} 
          />
          <button 
            onClick={() => showConfirm(
                "Charger une sauvegarde ?", 
                "Attention : Toutes les données actuelles seront remplacées par le contenu du fichier.", 
                () => {
                    setModal(prev => ({ ...prev, show: false }));
                    setTimeout(() => fileInputRef.current?.click(), 100);
                }
            )}
            className="btn-secondary px-4 py-2 text-[10px] bg-slate-950 hover:text-emerald-500"
            title="Charger"
          >
            <Upload size={18} className="group-hover:scale-110 transition-transform" />
            <span className="font-black uppercase tracking-wider hidden sm:inline">Charger</span>
          </button>
        </div>
      </header>

      {/* Modal & Notification logic copied from Sidebar */}
      {modal.show && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setModal(prev => ({ ...prev, show: false }))}></div>
          <div className="bg-slate-900 border border-slate-800 w-full max-w-sm rounded-3xl shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-200 text-left">
            <div className={`h-2 w-full ${modal.type === 'confirm' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
            <div className="p-8 text-center">
              <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${modal.type === 'confirm' ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                {modal.type === 'confirm' ? <HelpCircle size={32} /> : <Info size={32} />}
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">{modal.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{modal.message}</p>
              
              {modal.isSave && (
                <div className="mb-6 text-left">
                  <label htmlFor="save-filename-input" className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1 mb-2 block">Nom du fichier</label>
                  <input 
                    id="save-filename-input"
                    name="save-filename"
                    type="text"
                    value={saveFilename}
                    onChange={(e) => setSaveFilename(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-bold text-amber-500 focus:outline-none focus:border-amber-500/50 transition-all"
                    placeholder="nom_du_fichier"
                  />
                  <span className="text-[9px] text-slate-600 mt-1 ml-1 block">.json sera ajouté automatiquement</span>
                </div>
              )}

              <div className="flex gap-3">
                {modal.type === 'confirm' ? (
                  <>
                    <button onClick={() => setModal(prev => ({ ...prev, show: false }))} className="btn-secondary flex-1">Annuler</button>
                    <button onClick={() => { if (modal.onConfirm) modal.onConfirm(); }} className="btn-primary flex-1">Confirmer</button>
                  </>
                ) : (
                  <button onClick={() => setModal(prev => ({ ...prev, show: false }))} className="btn-secondary w-full">OK</button>
                )}
              </div>
            </div>
            <button onClick={() => setModal(prev => ({ ...prev, show: false }))} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"><X size={20} /></button>
          </div>
        </div>
      )}

      {/* Non-blocking Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 px-6 py-3 rounded-2xl font-black uppercase tracking-widest shadow-2xl border transition-colors ${
                notification.type === 'success' 
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400/50 shadow-emerald-500/20' 
                    : 'bg-rose-500 text-white border-rose-400/50 shadow-rose-500/20'
            }`}
          >
            <div className={`p-1 rounded-lg ${notification.type === 'success' ? 'bg-slate-950/20' : 'bg-white/20'}`}>
                <Bell size={18} />
            </div>
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
