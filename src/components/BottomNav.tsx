import React from 'react';
import { ActiveTab } from '../types';

interface BottomNavProps {
  currentTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  const navItems: { id: ActiveTab; label: string; icon: string }[] = [
    { id: 'inicio', label: 'Inicio', icon: 'dashboard' },
    { id: 'ia-fiscal', label: 'IA Fiscal', icon: 'auto_awesome' },
    { id: 'facturas', label: 'Facturas', icon: 'receipt_long' },
    { id: 'despachos', label: 'Despachos', icon: 'domain' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-[#faf8ff]/95 backdrop-blur-xl border-t border-[#eaedff] shadow-[0_-2px_12px_rgba(30,58,138,0.06)] pb-[max(env(safe-area-inset-bottom),0.25rem)]">
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] py-1 px-2.5 transition-all select-none ${
                isActive ? 'text-[#00236f] font-semibold scale-105' : 'text-[#444651] hover:text-[#131b2e]'
              }`}
            >
              <span className={`material-symbols-outlined text-[22px] ${isActive ? 'fill-1 font-bold' : ''}`}>
                {item.icon}
              </span>
              <span className="font-['JetBrains_Mono'] text-[10.5px] uppercase tracking-wider">
                {item.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#00236f] mt-0.5"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
