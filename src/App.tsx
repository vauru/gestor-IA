/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveTab } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { FiscalScreen } from './components/FiscalScreen';
import { FacturasScreen } from './components/FacturasScreen';
import { DespachosScreen } from './components/DespachosScreen';
import { DemoModal } from './components/DemoModal';
import { VideoTourModal } from './components/VideoTourModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<ActiveTab>('inicio');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [tourModalOpen, setTourModalOpen] = useState(false);

  const handleSelectTab = (tab: ActiveTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] flex flex-col font-['Hanken_Grotesk']">
      {/* Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenDemoModal={() => setDemoModalOpen(true)}
      />

      {/* Main Content Area with top/bottom padding for fixed bars */}
      <main className="flex-1 w-full pt-16 pb-24 md:pb-12 flex flex-col items-center">
        {currentTab === 'inicio' && (
          <HomeScreen
            onSelectTab={handleSelectTab}
            onOpenTour={() => setTourModalOpen(true)}
            onOpenDemo={() => setDemoModalOpen(true)}
          />
        )}

        {currentTab === 'ia-fiscal' && <FiscalScreen />}

        {currentTab === 'facturas' && <FacturasScreen />}

        {currentTab === 'despachos' && <DespachosScreen />}
      </main>

      {/* Fixed Bottom Navigation (matches screenshot and mobile app flow) */}
      <BottomNav currentTab={currentTab} onSelectTab={handleSelectTab} />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <VideoTourModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
        onGoToWorkbench={() => handleSelectTab('facturas')}
      />
    </div>
  );
}
