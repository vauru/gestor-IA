import React, { useState } from 'react';
import { INITIAL_INVOICES } from '../data';
import { InvoiceItem } from '../types';

export const FacturasScreen: React.FC = () => {
  const [invoices, setInvoices] = useState<InvoiceItem[]>(INITIAL_INVOICES);
  const [filter, setFilter] = useState<'todas' | 'pendientes' | 'validadas'>('todas');
  const [selectedInvoice, setSelectedInvoice] = useState<InvoiceItem>(INITIAL_INVOICES[2]); // Default on the one needing review or first
  const [isProcessingNew, setIsProcessingNew] = useState(false);
  const [syncFeedback, setSyncFeedback] = useState<string | null>(null);

  const filteredInvoices = invoices.filter((inv) => {
    if (filter === 'pendientes') return inv.status === 'pendiente_revision';
    if (filter === 'validadas') return inv.status === 'validada';
    return true;
  });

  const handleApproveInvoice = (id: string) => {
    setInvoices((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: 'validada', confidenceScore: 100, flagReason: undefined }
          : item
      )
    );
    if (selectedInvoice.id === id) {
      setSelectedInvoice((prev) => ({
        ...prev,
        status: 'validada',
        confidenceScore: 100,
        flagReason: undefined
      }));
    }
    setSyncFeedback(`Factura ${selectedInvoice.invoiceNumber} aprobada y contabilizada en diario A3ASESOR.`);
    setTimeout(() => setSyncFeedback(null), 3000);
  };

  const handleSimulateUpload = () => {
    setIsProcessingNew(true);
    setTimeout(() => {
      const newInvoice: InvoiceItem = {
        id: `FAC-2025-0${Math.floor(Math.random() * 800 + 100)}`,
        clientName: 'Talleres García & Hermanos S.L.',
        clientCif: 'B-28941033',
        supplier: 'Repsol Estaciones de Servicio S.A.',
        supplierCif: 'A-28037224',
        invoiceNumber: `REP-${Math.floor(Math.random() * 90000 + 10000)}`,
        date: '03/09/2026',
        baseAmount: 62.40,
        vatRate: 21,
        vatAmount: 13.10,
        total: 75.50,
        status: 'validada',
        confidenceScore: 99.7,
        accountDebit: '62800005',
        accountDebitName: 'Combustible Vehículos Comerciales',
        accountCredit: '41000055',
        accountCreditName: 'Repsol Estaciones de Servicio',
        source: 'WhatsApp'
      };

      setInvoices((prev) => [newInvoice, ...prev]);
      setSelectedInvoice(newInvoice);
      setIsProcessingNew(false);
      setSyncFeedback(`Nueva factura Repsol procesada en 2.1s con auto-asiento PGC asignado.`);
      setTimeout(() => setSyncFeedback(null), 3500);
    }, 1400);
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto md:max-w-2xl lg:max-w-3xl px-4 py-4 gap-4">
      {/* Screen Title */}
      <div className="flex flex-col gap-1">
        <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-0.5 rounded-full bg-[#86f2e4] text-[#006f66] font-['JetBrains_Mono'] text-[11px] font-semibold">
          <span className="material-symbols-outlined text-[16px]">psychology</span>
          OCR COGNITIVO MULTIMODELO
        </div>
        <h1 className="font-['Manrope'] text-[24px] sm:text-[28px] text-[#00236f] font-bold">
          Contabilidad y Facturas Autónomas
        </h1>
        <p className="font-['Hanken_Grotesk'] text-[13px] text-[#444651]">
          Extracción inteligente desde tickets y facturas recibidas por WhatsApp, escáner o email. Asignación automática del PGC.
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-2">
        <div className="p-2.5 rounded-xl bg-white border border-[#eaedff] shadow-sm flex flex-col">
          <span className="font-['JetBrains_Mono'] text-[10px] text-[#444651] uppercase">Hoy Procesadas</span>
          <span className="font-['Manrope'] text-[20px] font-bold text-[#00236f]">{invoices.length + 44}</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-[#eaedff] shadow-sm flex flex-col">
          <span className="font-['JetBrains_Mono'] text-[10px] text-[#444651] uppercase">Precisión OCR</span>
          <span className="font-['Manrope'] text-[20px] font-bold text-[#006a61]">99.8%</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-[#eaedff] shadow-sm flex flex-col">
          <span className="font-['JetBrains_Mono'] text-[10px] text-[#444651] uppercase">Revisión Pendiente</span>
          <span className="font-['Manrope'] text-[20px] font-bold text-[#ba1a1a]">
            {invoices.filter((i) => i.status === 'pendiente_revision').length}
          </span>
        </div>
      </div>

      {/* Upload button & Quick actions */}
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={handleSimulateUpload}
          disabled={isProcessingNew}
          className="flex-1 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#00236f] text-white font-['Hanken_Grotesk'] text-[13px] font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-[#1e3a8a] active:scale-[0.98] transition-all disabled:opacity-75"
        >
          {isProcessingNew ? (
            <>
              <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>
              <span>Procesando imagen OCR...</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">add_a_photo</span>
              <span>Simular Escaneo de Factura / Ticket</span>
            </>
          )}
        </button>

        {/* Filter chips */}
        <div className="flex items-center gap-1 bg-[#eaedff] p-1 rounded-xl">
          <button
            onClick={() => setFilter('todas')}
            className={`px-3 py-1 rounded-lg text-[12px] font-['Hanken_Grotesk'] font-medium transition-all ${
              filter === 'todas' ? 'bg-white text-[#00236f] font-bold shadow-sm' : 'text-[#444651]'
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setFilter('pendientes')}
            className={`px-3 py-1 rounded-lg text-[12px] font-['Hanken_Grotesk'] font-medium transition-all ${
              filter === 'pendientes' ? 'bg-white text-[#00236f] font-bold shadow-sm' : 'text-[#444651]'
            }`}
          >
            Revisión
          </button>
          <button
            onClick={() => setFilter('validadas')}
            className={`px-3 py-1 rounded-lg text-[12px] font-['Hanken_Grotesk'] font-medium transition-all ${
              filter === 'validadas' ? 'bg-white text-[#00236f] font-bold shadow-sm' : 'text-[#444651]'
            }`}
          >
            Validadas
          </button>
        </div>
      </div>

      {syncFeedback && (
        <div className="p-3 rounded-xl bg-[#86f2e4] text-[#006f66] text-[13px] font-['Hanken_Grotesk'] font-semibold flex items-center gap-2 animate-in zoom-in-95">
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
          <span>{syncFeedback}</span>
        </div>
      )}

      {/* Invoice List & Workbench */}
      <div className="flex flex-col gap-3">
        {/* Document Workbench Card (Selected) */}
        {selectedInvoice && (
          <div className="p-4 sm:p-5 rounded-2xl bg-white shadow-md border border-[#dae2fd] flex flex-col gap-3.5">
            <div className="flex items-start justify-between gap-2 border-b border-[#eaedff] pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-['JetBrains_Mono'] text-[12px] font-bold text-[#00236f]">
                    {selectedInvoice.invoiceNumber}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full font-['JetBrains_Mono'] text-[10px] font-semibold ${
                    selectedInvoice.status === 'validada'
                      ? 'bg-[#86f2e4] text-[#006f66]'
                      : 'bg-[#ffdad6] text-[#ba1a1a]'
                  }`}>
                    {selectedInvoice.status === 'validada' ? 'Validada' : 'Atención Requerida'}
                  </span>
                </div>
                <h3 className="font-['Manrope'] text-[17px] font-bold text-[#131b2e] mt-0.5">
                  {selectedInvoice.supplier}
                </h3>
                <p className="font-['Hanken_Grotesk'] text-[12px] text-[#444651]">
                  Cliente: <span className="font-semibold text-[#131b2e]">{selectedInvoice.clientName}</span> ({selectedInvoice.clientCif})
                </p>
              </div>

              <div className="text-right">
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#444651] block">Total Factura</span>
                <span className="font-['JetBrains_Mono'] text-[20px] font-bold text-[#00236f]">
                  {selectedInvoice.total.toFixed(2)} €
                </span>
              </div>
            </div>

            {/* Warning if flag reason exists */}
            {selectedInvoice.flagReason && (
              <div className="p-3 rounded-xl bg-[#ffdad6]/60 border border-[#ffdad6] flex items-start gap-2 text-[12px] text-[#93000a]">
                <span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5">info</span>
                <span>{selectedInvoice.flagReason}</span>
              </div>
            )}

            {/* AI Extracted Details Table */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-['JetBrains_Mono'] text-[11px]">
              <div className="p-2 rounded-lg bg-[#faf8ff] border border-[#eaedff]">
                <span className="text-[#444651] block">NIF Emisor</span>
                <span className="font-bold text-[#131b2e]">{selectedInvoice.supplierCif}</span>
              </div>
              <div className="p-2 rounded-lg bg-[#faf8ff] border border-[#eaedff]">
                <span className="text-[#444651] block">Fecha Operación</span>
                <span className="font-bold text-[#131b2e]">{selectedInvoice.date}</span>
              </div>
              <div className="p-2 rounded-lg bg-[#faf8ff] border border-[#eaedff]">
                <span className="text-[#444651] block">Base Imponible</span>
                <span className="font-bold text-[#131b2e]">{selectedInvoice.baseAmount.toFixed(2)} €</span>
              </div>
              <div className="p-2 rounded-lg bg-[#faf8ff] border border-[#eaedff]">
                <span className="text-[#444651] block">IVA ({selectedInvoice.vatRate}%)</span>
                <span className="font-bold text-[#131b2e]">{selectedInvoice.vatAmount.toFixed(2)} €</span>
              </div>
            </div>

            {/* Auto-Asiento PGC Box */}
            <div className="p-3.5 rounded-xl bg-[#f2f3ff] border border-[#dce1ff] flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#00236f] font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#006a61]">receipt</span>
                  Auto-Asiento Contable Generado (PGC)
                </span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#006a61] bg-[#86f2e4] px-2 py-0.5 rounded-full font-semibold">
                  Confianza {selectedInvoice.confidenceScore}%
                </span>
              </div>

              <div className="space-y-1.5 font-['JetBrains_Mono'] text-[11.5px]">
                {/* Debit */}
                <div className="flex items-center justify-between p-2 rounded bg-white border border-[#eaedff]">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-[#e2e7ff] text-[#00236f] font-bold text-[10px]">DEBE</span>
                    <span className="font-bold text-[#00236f]">{selectedInvoice.accountDebit}</span>
                    <span className="text-[#444651] truncate max-w-[170px] sm:max-w-[280px]">{selectedInvoice.accountDebitName}</span>
                  </div>
                  <span className="font-bold text-[#131b2e]">{selectedInvoice.baseAmount.toFixed(2)} €</span>
                </div>

                {/* VAT Debit */}
                <div className="flex items-center justify-between p-2 rounded bg-white border border-[#eaedff]">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-[#e2e7ff] text-[#00236f] font-bold text-[10px]">DEBE</span>
                    <span className="font-bold text-[#00236f]">472000{selectedInvoice.vatRate}</span>
                    <span className="text-[#444651]">HP IVA Soportado ({selectedInvoice.vatRate}%)</span>
                  </div>
                  <span className="font-bold text-[#131b2e]">{selectedInvoice.vatAmount.toFixed(2)} €</span>
                </div>

                {/* Credit */}
                <div className="flex items-center justify-between p-2 rounded bg-white border border-[#eaedff]">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-[#dae2fd] text-[#006f66] font-bold text-[10px]">HABER</span>
                    <span className="font-bold text-[#006a61]">{selectedInvoice.accountCredit}</span>
                    <span className="text-[#444651] truncate max-w-[170px] sm:max-w-[280px]">{selectedInvoice.accountCreditName}</span>
                  </div>
                  <span className="font-bold text-[#131b2e]">{selectedInvoice.total.toFixed(2)} €</span>
                </div>
              </div>
            </div>

            {/* Workbench Actions */}
            <div className="flex items-center gap-2 pt-1">
              {selectedInvoice.status === 'pendiente_revision' ? (
                <button
                  onClick={() => handleApproveInvoice(selectedInvoice.id)}
                  className="flex-1 min-h-[44px] px-4 py-2 rounded-xl bg-[#006a61] text-white font-['Hanken_Grotesk'] text-[13px] font-semibold flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#005049] transition-all active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>Aprobar y Enviar a A3 / Sage</span>
                </button>
              ) : (
                <button
                  onClick={() => handleApproveInvoice(selectedInvoice.id)}
                  className="flex-1 min-h-[44px] px-4 py-2 rounded-xl bg-[#00236f] text-white font-['Hanken_Grotesk'] text-[13px] font-semibold flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#1e3a8a] transition-all active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-[18px]">sync</span>
                  <span>Re-exportar Diario a A3ASESOR</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Invoices List */}
        <div className="flex flex-col gap-2 mt-2">
          <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#444651] font-semibold">
            Bandeja de Facturas ({filteredInvoices.length})
          </span>

          {filteredInvoices.map((inv) => {
            const isSelected = selectedInvoice?.id === inv.id;
            return (
              <div
                key={inv.id}
                onClick={() => setSelectedInvoice(inv)}
                className={`p-3.5 rounded-xl bg-white shadow-sm border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected ? 'border-[#00236f] ring-1 ring-[#00236f]' : 'border-[#eaedff] hover:border-[#86f2e4]'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    inv.status === 'validada' ? 'bg-[#86f2e4] text-[#006a61]' : 'bg-[#ffdad6] text-[#ba1a1a]'
                  }`}>
                    <span className="material-symbols-outlined text-[20px]">
                      {inv.status === 'validada' ? 'receipt' : 'warning'}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-['Manrope'] text-[14px] font-bold text-[#131b2e] truncate">
                        {inv.supplier}
                      </span>
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#444651]">
                        via {inv.source}
                      </span>
                    </div>
                    <span className="font-['Hanken_Grotesk'] text-[12px] text-[#444651] truncate block">
                      {inv.clientName} • {inv.date}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-['JetBrains_Mono'] text-[15px] font-bold text-[#00236f] block">
                    {inv.total.toFixed(2)} €
                  </span>
                  <span className={`font-['JetBrains_Mono'] text-[10px] font-semibold ${
                    inv.status === 'validada' ? 'text-[#006a61]' : 'text-[#ba1a1a]'
                  }`}>
                    {inv.status === 'validada' ? 'Contabilizada' : 'Revisar'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
