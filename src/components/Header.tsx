import React, { useState } from 'react';
import { ActiveTab } from '../types';

interface HeaderProps {
  currentTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenDemoModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenDemoModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[#faf8ff]/90 backdrop-blur-xl border-b border-[#eaedff] shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="max-w-5xl mx-auto h-16 px-4 flex items-center justify-between gap-2">
          {/* Logo & Brand */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer select-none"
            onClick={() => onSelectTab('inicio')}
          >
            <img
              alt="GestorIA Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1Ups4pxoHMxkMjHFyTCYoSVAOjpK2xkdjPNs-WgumpJUtkT99xL4PuTMQIaX56Q_9vVghHv6-Ny2JzYdroH8yP0sibPWDromcAO6jmUtIIUynH3b2SRFM8r-cs2k0BvS8VxF7eOe9w3g8WSIqj8gVEj8zp00N3MPuEyGeO1HvnTTMOLn3oU1kZ1x9OZeJV7ofnKFApcvDRYNcZGMgfs2okjEukG3M9MFAI1SBd-lcGboayL-l8iBfQIMoQ"
            />
            <span className="font-['Manrope'] text-[19px] font-bold tracking-tight text-[#00236f]">
              GestorIA
            </span>
          </div>

          {/* Desktop quick nav links */}
          <nav className="hidden md:flex items-center gap-1 font-['Hanken_Grotesk'] text-[14px]">
            <button
              onClick={() => onSelectTab('inicio')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentTab === 'inicio' ? 'bg-[#eaedff] text-[#00236f] font-semibold' : 'text-[#444651] hover:text-[#131b2e]'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => onSelectTab('ia-fiscal')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentTab === 'ia-fiscal' ? 'bg-[#eaedff] text-[#00236f] font-semibold' : 'text-[#444651] hover:text-[#131b2e]'
              }`}
            >
              IA Fiscal
            </button>
            <button
              onClick={() => onSelectTab('facturas')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentTab === 'facturas' ? 'bg-[#eaedff] text-[#00236f] font-semibold' : 'text-[#444651] hover:text-[#131b2e]'
              }`}
            >
              Facturas Autónomas
            </button>
            <button
              onClick={() => onSelectTab('despachos')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentTab === 'despachos' ? 'bg-[#eaedff] text-[#00236f] font-semibold' : 'text-[#444651] hover:text-[#131b2e]'
              }`}
            >
              Despachos & WhatsApp
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg bg-[#00236f] text-white font-['Hanken_Grotesk'] text-[13px] font-semibold shadow-sm hover:bg-[#1e3a8a] transition-all active:scale-[0.98] min-h-[38px]"
            >
              <span className="material-symbols-outlined text-[16px] mr-1">bolt</span>
              <span>Demo</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              aria-label="Menú"
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-[#444651] hover:bg-[#eaedff] transition-colors md:hidden"
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>

            {/* Profile Avatar / Status */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-8 h-8 rounded-full bg-[#00236f] flex items-center justify-center text-white hover:ring-2 hover:ring-[#86f2e4] transition-all shrink-0"
                title="Perfil Colegiado"
                aria-label="Perfil de usuario"
              >
                <span className="material-symbols-outlined text-[18px]">person</span>
              </button>

              {/* Profile Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-64 p-3 bg-white rounded-xl shadow-xl border border-[#eaedff] z-50 animate-in fade-in zoom-in-95">
                  <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#eaedff]">
                    <div className="w-9 h-9 rounded-full bg-[#00236f] text-white flex items-center justify-center font-bold text-xs">
                      AG
                    </div>
                    <div className="min-w-0">
                      <p className="font-['Manrope'] text-[13px] font-bold text-[#131b2e] truncate">
                        Asesoría Gran Vía & Asociados
                      </p>
                      <p className="font-['JetBrains_Mono'] text-[11px] text-[#006f66] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006a61] inline-block animate-pulse"></span>
                        Colegiado #28-4912
                      </p>
                    </div>
                  </div>
                  <div className="pt-2 text-[12px] text-[#444651] space-y-1.5">
                    <div className="flex justify-between py-1">
                      <span>Plan:</span>
                      <span className="font-semibold text-[#00236f]">Despacho Pro (Ilimitado)</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Conexión contable:</span>
                      <span className="inline-flex items-center text-[#006f66] font-medium">
                        <span className="material-symbols-outlined text-[14px] mr-0.5">check_circle</span>
                        A3ASESOR Sincronizado
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Seguridad:</span>
                      <span className="font-['JetBrains_Mono'] text-[11px] text-gray-500">DPA RGPD Activo</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {menuOpen && (
          <div className="md:hidden px-4 py-3 bg-[#faf8ff] border-t border-[#eaedff] flex flex-col gap-1 animate-in slide-in-from-top-2">
            <button
              onClick={() => { onSelectTab('inicio'); setMenuOpen(false); }}
              className={`w-full text-left px-3 py-2 rounded-lg font-['Hanken_Grotesk'] text-[14px] flex items-center gap-2 ${
                currentTab === 'inicio' ? 'bg-[#eaedff] text-[#00236f] font-semibold' : 'text-[#444651]'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              <span>Inicio & Visión General</span>
            </button>
            <button
              onClick={() => { onSelectTab('ia-fiscal'); setMenuOpen(false); }}
              className={`w-full text-left px-3 py-2 rounded-lg font-['Hanken_Grotesk'] text-[14px] flex items-center gap-2 ${
                currentTab === 'ia-fiscal' ? 'bg-[#eaedff] text-[#00236f] font-semibold' : 'text-[#444651]'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
              <span>IA Fiscal & Modelos AEAT</span>
            </button>
            <button
              onClick={() => { onSelectTab('facturas'); setMenuOpen(false); }}
              className={`w-full text-left px-3 py-2 rounded-lg font-['Hanken_Grotesk'] text-[14px] flex items-center gap-2 ${
                currentTab === 'facturas' ? 'bg-[#eaedff] text-[#00236f] font-semibold' : 'text-[#444651]'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">receipt_long</span>
              <span>Facturas Autónomas & OCR</span>
            </button>
            <button
              onClick={() => { onSelectTab('despachos'); setMenuOpen(false); }}
              className={`w-full text-left px-3 py-2 rounded-lg font-['Hanken_Grotesk'] text-[14px] flex items-center gap-2 ${
                currentTab === 'despachos' ? 'bg-[#eaedff] text-[#00236f] font-semibold' : 'text-[#444651]'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">domain</span>
              <span>Despachos & WhatsApp 24/7</span>
            </button>
          </div>
        )}
      </header>
    </>
  );
};
