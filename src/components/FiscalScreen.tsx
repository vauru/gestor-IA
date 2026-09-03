import React, { useState } from 'react';
import { TAX_MODELS } from '../data';
import { TaxModel } from '../types';

export const FiscalScreen: React.FC = () => {
  const [models, setModels] = useState<TaxModel[]>(TAX_MODELS);
  const [selectedModel, setSelectedModel] = useState<TaxModel>(TAX_MODELS[0]);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResults, setAuditResults] = useState<{
    status: 'clean' | 'warning';
    message: string;
    checkedItems: number;
  } | null>({
    status: 'clean',
    message: 'Todas las facturas emitidas y recibidas del 3T 2025 cuadran con libros registro y NIFs verificados en censo VIES/AEAT.',
    checkedItems: 48
  });
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const runFiscalAudit = () => {
    setIsAuditing(true);
    setAuditResults(null);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditResults({
        status: 'clean',
        message: 'Auditoría completada sin discrepancias: 142 facturas analizadas. 0 descuadres de prorrata. Coherencia con N43: 100%.',
        checkedItems: 142
      });
    }, 1200);
  };

  const handleExportBoe = (modelCode: string) => {
    setDownloadSuccess(`Fichero telemático oficial ${modelCode} generado correctamente con algoritmo de validación de casillas AEAT.`);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto md:max-w-2xl lg:max-w-3xl px-4 py-4 gap-4">
      {/* Header section */}
      <div className="flex flex-col gap-1">
        <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-0.5 rounded-full bg-[#86f2e4] text-[#006f66] font-['JetBrains_Mono'] text-[11px] font-semibold">
          <span className="material-symbols-outlined text-[16px]">verified</span>
          AEAT & HACIENDA READY
        </div>
        <h1 className="font-['Manrope'] text-[24px] sm:text-[28px] text-[#00236f] font-bold">
          Asistente Fiscal y Modelos Oficiales
        </h1>
        <p className="font-['Hanken_Grotesk'] text-[13px] text-[#444651]">
          Cálculo proyectado de liquidaciones tributarias, conciliación de libros oficiales y auditoría preventiva anti-requerimientos.
        </p>
      </div>

      {/* Period Selector & Audit Button */}
      <div className="p-3.5 rounded-xl bg-white shadow-sm border border-[#eaedff] flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="material-symbols-outlined text-[#006a61] text-[20px]">calendar_month</span>
          <div className="flex flex-col">
            <span className="font-['JetBrains_Mono'] text-[10px] text-[#444651] uppercase font-semibold">Periodo Impositivo</span>
            <span className="font-['Manrope'] text-[14px] font-bold text-[#00236f]">3T 2025 (Julio - Septiembre)</span>
          </div>
        </div>

        <button
          onClick={runFiscalAudit}
          disabled={isAuditing}
          className="w-full sm:w-auto px-3.5 py-2 rounded-lg bg-[#00236f] text-white font-['Hanken_Grotesk'] text-[13px] font-semibold flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#1e3a8a] active:scale-[0.98] transition-all disabled:opacity-75"
        >
          {isAuditing ? (
            <>
              <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>
              <span>Auditando libros...</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">security_update_good</span>
              <span>Ejecutar Auditoría Preventiva IA</span>
            </>
          )}
        </button>
      </div>

      {/* Auditor Alert Feedback */}
      {auditResults && (
        <div className="p-3.5 rounded-xl bg-[#86f2e4]/30 border border-[#86f2e4] flex items-start gap-2.5 animate-in fade-in">
          <span className="material-symbols-outlined text-[#006a61] text-[22px] shrink-0 mt-0.5">task_alt</span>
          <div className="flex flex-col gap-0.5">
            <span className="font-['Manrope'] text-[13px] font-bold text-[#00236f]">
              Comprobación Fiscal Satisfactoria ({auditResults.checkedItems} registros)
            </span>
            <p className="font-['Hanken_Grotesk'] text-[12px] text-[#006f66] leading-relaxed">
              {auditResults.message}
            </p>
          </div>
        </div>
      )}

      {downloadSuccess && (
        <div className="p-3.5 rounded-xl bg-[#dce1ff] border border-[#90a8ff] flex items-center gap-2 text-[#00236f] text-[13px] font-['Hanken_Grotesk'] font-medium animate-in zoom-in-95">
          <span className="material-symbols-outlined text-[20px] text-[#00236f]">download_done</span>
          <span>{downloadSuccess}</span>
        </div>
      )}

      {/* Tax Models Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {models.map((m) => {
          const isSelected = selectedModel.id === m.id;
          return (
            <div
              key={m.id}
              onClick={() => setSelectedModel(m)}
              className={`p-4 rounded-xl bg-white shadow-sm border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                isSelected
                  ? 'border-[#00236f] ring-2 ring-[#00236f]/10 shadow-md'
                  : 'border-[#eaedff] hover:border-[#86f2e4]'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="px-2 py-0.5 rounded bg-[#dce1ff] text-[#00236f] font-['JetBrains_Mono'] text-[11px] font-bold">
                    {m.code}
                  </span>
                  <h3 className="font-['Manrope'] text-[15px] font-bold text-[#131b2e] mt-1.5">
                    {m.title}
                  </h3>
                </div>
                <span className={`px-2 py-0.5 rounded-full font-['JetBrains_Mono'] text-[10px] font-semibold ${
                  m.status === 'Calculado' ? 'bg-[#86f2e4] text-[#006f66]' : 'bg-[#e2e7ff] text-[#00236f]'
                }`}>
                  {m.status}
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-2 border-t border-[#f2f3ff]">
                <span className="font-['Hanken_Grotesk'] text-[12px] text-[#444651]">Resultado a liquidar</span>
                <span className="font-['JetBrains_Mono'] text-[18px] font-bold text-[#00236f]">
                  {m.declaredAmount.toLocaleString('es-ES', { minimumFractionDigits: 2 })} €
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#444651]">
                <span>Plazo: {m.dueDate}</span>
                <span className="text-[#006a61] font-semibold flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[14px]">visibility</span> Ver casillas
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Drilldown of Selected Tax Model */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white shadow-sm border border-[#eaedff] flex flex-col gap-4 mt-1">
        <div className="flex items-center justify-between pb-3 border-b border-[#eaedff] flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#00236f] text-white flex items-center justify-center font-['JetBrains_Mono'] text-[12px] font-bold">
              {selectedModel.code.replace('Modelo ', '')}
            </span>
            <div>
              <h4 className="font-['Manrope'] text-[16px] font-bold text-[#00236f]">
                Desglose Oficial {selectedModel.code}
              </h4>
              <p className="font-['Hanken_Grotesk'] text-[12px] text-[#444651]">
                {selectedModel.title}
              </p>
            </div>
          </div>

          <button
            onClick={() => handleExportBoe(selectedModel.code)}
            className="px-3 py-1.5 rounded-lg bg-[#006a61] text-white font-['Hanken_Grotesk'] text-[12px] font-semibold flex items-center gap-1.5 hover:bg-[#005049] transition-colors active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-[16px]">file_download</span>
            <span>Descargar Fichero BOE</span>
          </button>
        </div>

        {/* Casillas Simulation */}
        <div className="space-y-2 font-['JetBrains_Mono'] text-[12px]">
          <div className="p-2.5 rounded-lg bg-[#faf8ff] border border-[#eaedff] flex items-center justify-between">
            <span className="text-[#444651]">[01] Base imponible 21%</span>
            <span className="font-bold text-[#131b2e]">
              {selectedModel.details.base21.toLocaleString('es-ES', { minimumFractionDigits: 2 })} €
            </span>
          </div>

          {selectedModel.details.iva21 > 0 && (
            <div className="p-2.5 rounded-lg bg-[#faf8ff] border border-[#eaedff] flex items-center justify-between">
              <span className="text-[#444651]">[03] Cuota devengada 21%</span>
              <span className="font-bold text-[#131b2e]">
                {selectedModel.details.iva21.toLocaleString('es-ES', { minimumFractionDigits: 2 })} €
              </span>
            </div>
          )}

          {selectedModel.details.base10 > 0 && (
            <div className="p-2.5 rounded-lg bg-[#faf8ff] border border-[#eaedff] flex items-center justify-between">
              <span className="text-[#444651]">[04] Base imponible 10%</span>
              <span className="font-bold text-[#131b2e]">
                {selectedModel.details.base10.toLocaleString('es-ES', { minimumFractionDigits: 2 })} €
              </span>
            </div>
          )}

          {selectedModel.details.deductibleVat > 0 && (
            <div className="p-2.5 rounded-lg bg-[#faf8ff] border border-[#eaedff] flex items-center justify-between">
              <span className="text-[#444651]">[28] Cuotas de IVA soportado deducible</span>
              <span className="font-bold text-[#006a61]">
                - {selectedModel.details.deductibleVat.toLocaleString('es-ES', { minimumFractionDigits: 2 })} €
              </span>
            </div>
          )}

          <div className="p-3 rounded-lg bg-[#dce1ff] text-[#00236f] flex items-center justify-between text-[14px] font-bold">
            <span>[71] Resultado de la liquidación</span>
            <span>
              {selectedModel.details.result.toLocaleString('es-ES', { minimumFractionDigits: 2 })} €
            </span>
          </div>
        </div>

        {/* Integration Footnote */}
        <div className="p-2.5 rounded-lg bg-[#f2f3ff] text-[#444651] text-[11px] font-['Hanken_Grotesk'] flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#006a61]">sync</span>
            Fichero preparado para importación directa en TGSS / Sede Electrónica AEAT
          </span>
          <span className="font-['JetBrains_Mono'] text-[#006f66] font-semibold">Validado</span>
        </div>
      </div>
    </div>
  );
};
