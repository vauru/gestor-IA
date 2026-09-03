import React, { useState } from 'react';
import { ActiveTab } from '../types';

interface HomeScreenProps {
  onSelectTab: (tab: ActiveTab) => void;
  onOpenTour: () => void;
  onOpenDemo: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onSelectTab, onOpenTour, onOpenDemo }) => {
  // Before / After comparison toggle
  const [compareMode, setCompareMode] = useState<'despues' | 'antes'>('despues');
  
  // FAQs open state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    despachoName: '',
    profEmail: '',
    telContacto: '',
    softwareActual: 'a3'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto md:max-w-2xl lg:max-w-3xl">
      {/* 1. HERO SECTION */}
      <section className="px-4 pt-4 pb-6 flex flex-col gap-3.5 relative overflow-hidden">
        {/* Ambient glowing backdrop elements */}
        <div className="absolute -top-12 -right-16 w-56 h-56 rounded-full bg-[#86f2e4]/35 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-48 h-48 rounded-full bg-[#dae2fd]/60 blur-2xl pointer-events-none"></div>

        {/* AI Tag Badge */}
        <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-[#86f2e4] text-[#006f66] shadow-sm">
          <span className="material-symbols-outlined text-[16px] animate-pulse">auto_awesome</span>
          <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider font-semibold">
            IA para Gestorías y Asesorías
          </span>
        </div>

        {/* Headline & Copy */}
        <div className="flex flex-col gap-2">
          <h1 className="font-['Manrope'] text-[28px] sm:text-[34px] text-[#00236f] font-extrabold tracking-tight leading-[1.15]">
            Multiplica <span className="text-[#006a61]">x10</span> la capacidad de tu gestoría sin aumentar personal
          </h1>
          <p className="font-['Hanken_Grotesk'] text-[15px] text-[#444651] leading-relaxed mt-1">
            La plataforma inteligente diseñada específicamente para despachos profesionales: contabilización autónoma de facturas, conciliación bancaria inteligente y presentación fiscal en minutos.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
          <button
            onClick={onOpenDemo}
            className="w-full sm:flex-1 min-h-[48px] px-4 py-3 rounded-xl bg-[#00236f] text-white font-['Hanken_Grotesk'] text-[14px] font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-[#1e3a8a] transition-all active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-[20px]">bolt</span>
            <span>Probar Demo Gratuita de 14 Días</span>
          </button>
          
          <button
            onClick={onOpenTour}
            className="w-full sm:flex-1 min-h-[44px] px-4 py-3 rounded-xl bg-[#e2e7ff] text-[#00236f] font-['Hanken_Grotesk'] text-[14px] font-semibold flex items-center justify-center gap-2 shadow-sm hover:bg-[#dae2fd] transition-colors active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-[18px]">play_circle</span>
            <span>Ver cómo funciona en 2 min</span>
          </button>
        </div>

        {/* Live Trust / Social Proof Banner */}
        <div className="p-3.5 rounded-xl bg-white shadow-sm border border-[#eaedff] flex flex-col gap-2 mt-1">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center -space-x-2 shrink-0">
              <div className="w-7 h-7 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-['JetBrains_Mono'] text-[10px] font-bold shadow-sm">MB</div>
              <div className="w-7 h-7 rounded-full bg-[#006a61] text-white flex items-center justify-center font-['JetBrains_Mono'] text-[10px] font-bold shadow-sm">LR</div>
              <div className="w-7 h-7 rounded-full bg-[#004469] text-[#cce5ff] flex items-center justify-center font-['JetBrains_Mono'] text-[10px] font-bold shadow-sm">CG</div>
              <div className="w-7 h-7 rounded-full bg-[#dae2fd] text-[#00236f] flex items-center justify-center font-['JetBrains_Mono'] text-[10px] font-bold shadow-sm">+450</div>
            </div>
            <div className="flex items-center gap-1.5 min-w-0">
              <div className="flex text-amber-500">
                <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                <span className="material-symbols-outlined text-[16px] fill-1">star</span>
                <span className="material-symbols-outlined text-[16px] fill-1">star_half</span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[13px] text-[#00236f] font-bold">4.9/5</span>
            </div>
          </div>
          <p className="font-['Hanken_Grotesk'] text-[12px] text-[#444651]">
            Valorado por más de 450 gestorías colegiadas en España
          </p>
          <div className="flex items-center gap-4 pt-1 text-[#444651]">
            <span className="inline-flex items-center gap-1 font-['JetBrains_Mono'] text-[11px]">
              <span className="material-symbols-outlined text-[14px] text-[#006a61]">verified_user</span> RGPD Compliant
            </span>
            <span className="inline-flex items-center gap-1 font-['JetBrains_Mono'] text-[11px]">
              <span className="material-symbols-outlined text-[14px] text-[#006a61]">lock</span> TLS 256-bit Bancario
            </span>
          </div>
        </div>
      </section>

      {/* 2. METRICS & IMPACT STATS */}
      <section className="px-4 py-4 bg-[#f2f3ff] flex flex-col gap-2.5 my-2 rounded-2xl border border-[#eaedff]">
        <div className="flex items-center justify-between">
          <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#006a61] font-semibold">
            Impacto Operativo Medido
          </span>
          <span className="font-['JetBrains_Mono'] text-[11px] text-[#444651]">Q1 2025</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {/* Stat 1 */}
          <div className="p-3.5 rounded-xl bg-white shadow-sm border border-[#eaedff] flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <span className="font-['Manrope'] text-[24px] text-[#00236f] font-bold tracking-tight">-85%</span>
              <span className="material-symbols-outlined text-[#006a61] text-[20px]">speed</span>
            </div>
            <p className="font-['Hanken_Grotesk'] text-[12px] text-[#444651] leading-tight">
              Tiempo en picado manual de facturas y asientos
            </p>
          </div>
          {/* Stat 2 */}
          <div className="p-3.5 rounded-xl bg-white shadow-sm border border-[#eaedff] flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <span className="font-['Manrope'] text-[24px] text-[#006a61] font-bold tracking-tight">99.8%</span>
              <span className="material-symbols-outlined text-[#006a61] text-[20px]">verified</span>
            </div>
            <p className="font-['Hanken_Grotesk'] text-[12px] text-[#444651] leading-tight">
              Precisión OCR multimodelo con verificación
            </p>
          </div>
          {/* Stat 3 */}
          <div className="p-3.5 rounded-xl bg-white shadow-sm border border-[#eaedff] flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <span className="font-['Manrope'] text-[24px] text-[#00236f] font-bold tracking-tight">3.5h</span>
              <span className="material-symbols-outlined text-[#006a61] text-[20px]">schedule</span>
            </div>
            <p className="font-['Hanken_Grotesk'] text-[12px] text-[#444651] leading-tight">
              Ahorro diario promedio por contable en plantilla
            </p>
          </div>
          {/* Stat 4 */}
          <div className="p-3.5 rounded-xl bg-white shadow-sm border border-[#eaedff] flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <span className="font-['Manrope'] text-[24px] text-[#00236f] font-bold tracking-tight">0</span>
              <span className="material-symbols-outlined text-[#006a61] text-[20px]">task_alt</span>
            </div>
            <p className="font-['Hanken_Grotesk'] text-[12px] text-[#444651] leading-tight">
              Descuadres en conciliación bancaria N43
            </p>
          </div>
        </div>
      </section>

      {/* 3. SPECIALIZED AI MODULES */}
      <section className="px-4 py-5 flex flex-col gap-3.5" id="soluciones">
        <div className="flex flex-col gap-1">
          <div className="inline-flex items-center gap-1.5 text-[#006a61] font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider font-semibold">
            <span className="material-symbols-outlined text-[16px]">tune</span>
            Suite Modular Especializada
          </div>
          <h2 className="font-['Manrope'] text-[22px] sm:text-[26px] text-[#131b2e] font-bold leading-tight">
            Automatización integral sin cambiar tu flujo contable
          </h2>
          <p className="font-['Hanken_Grotesk'] text-[13px] text-[#444651]">
            Tecnología diseñada para integrarse en un clic con tu software actual: A3, Sage, Holded o ContaPlus.
          </p>
        </div>

        {/* Modules Stack */}
        <div className="flex flex-col gap-3">
          {/* Modulo 1: Facturas */}
          <div 
            onClick={() => onSelectTab('facturas')}
            className="p-4 rounded-xl bg-white shadow-sm border border-[#eaedff] flex flex-col gap-2 hover:border-[#86f2e4] transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#dce1ff] flex items-center justify-center text-[#00236f] shrink-0 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[24px]">receipt_long</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#86f2e4] text-[#006f66] font-['JetBrains_Mono'] text-[11px] font-semibold">
                Auto-Asiento PGC
              </span>
            </div>
            <h3 className="font-['Manrope'] text-[17px] text-[#00236f] font-semibold pt-1 flex items-center justify-between">
              <span>Contabilidad y Facturas Autónomas</span>
              <span className="material-symbols-outlined text-[18px] text-[#006a61] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </h3>
            <p className="font-['Hanken_Grotesk'] text-[13px] text-[#444651] leading-relaxed">
              Extracción inteligente desde PDFs escaneados, tickets arrugados o fotos recibidas por WhatsApp. Asignación inmediata de subcuentas PGC y generación de fichero diario listo para importar.
            </p>
            <div className="flex items-center gap-1.5 pt-1 text-[#444651] font-['JetBrains_Mono'] text-[11px] flex-wrap">
              <span className="px-2 py-0.5 rounded bg-[#eaedff]">A3ASESOR</span>
              <span className="px-2 py-0.5 rounded bg-[#eaedff]">Sage Despachos</span>
              <span className="px-2 py-0.5 rounded bg-[#eaedff]">Holded</span>
            </div>
          </div>

          {/* Modulo 2: Conciliación Bancaria */}
          <div className="p-4 rounded-xl bg-white shadow-sm border border-[#eaedff] flex flex-col gap-2">
            <div className="flex items-start justify-between gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#86f2e4] flex items-center justify-center text-[#006a61] shrink-0">
                <span className="material-symbols-outlined text-[24px]">account_balance</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#e2e7ff] text-[#00236f] font-['JetBrains_Mono'] text-[11px] font-semibold">
                Norma 43 / PSD2
              </span>
            </div>
            <h3 className="font-['Manrope'] text-[17px] text-[#00236f] font-semibold pt-1">
              Conciliación Bancaria Predictiva
            </h3>
            <p className="font-['Hanken_Grotesk'] text-[13px] text-[#444651] leading-relaxed">
              Cruce algorítmico de extractos bancarios con facturación viva. El motor aprende patrones de cobro, agrupa remesas y detecta desviaciones de céntimos en comisiones en milisegundos.
            </p>
          </div>

          {/* Modulo 3: Laboral */}
          <div className="p-4 rounded-xl bg-white shadow-sm border border-[#eaedff] flex flex-col gap-2">
            <div className="flex items-start justify-between gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#dae2fd] flex items-center justify-center text-[#00236f] shrink-0">
                <span className="material-symbols-outlined text-[24px]">badge</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#86f2e4] text-[#006f66] font-['JetBrains_Mono'] text-[11px] font-semibold">
                Laboral & SILTRA
              </span>
            </div>
            <h3 className="font-['Manrope'] text-[17px] text-[#00236f] font-semibold pt-1">
              Gestión Laboral y Nóminas IA
            </h3>
            <p className="font-['Hanken_Grotesk'] text-[13px] text-[#444651] leading-relaxed">
              Lectura automática de partes de baja médica (IT), contratos de trabajo e informes de vida laboral. Validación instantánea de bases de cotización contra tablas de Seguridad Social.
            </p>
          </div>

          {/* Modulo 4: IA Fiscal */}
          <div 
            onClick={() => onSelectTab('ia-fiscal')}
            className="p-4 rounded-xl bg-white shadow-sm border border-[#eaedff] flex flex-col gap-2 hover:border-[#86f2e4] transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#dce1ff] flex items-center justify-center text-[#00236f] shrink-0 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[24px]">assessment</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#e2e7ff] text-[#00236f] font-['JetBrains_Mono'] text-[11px] font-semibold">
                AEAT Ready
              </span>
            </div>
            <h3 className="font-['Manrope'] text-[17px] text-[#00236f] font-semibold pt-1 flex items-center justify-between">
              <span>Asistente Fiscal y Modelos Oficiales</span>
              <span className="material-symbols-outlined text-[18px] text-[#006a61] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </h3>
            <p className="font-['Hanken_Grotesk'] text-[13px] text-[#444651] leading-relaxed">
              Cálculo proyectado y detección preventiva de discrepancias en Modelos 303, 390, 111 y 115. Alertas tempranas ante posibles requerimientos o gastos no deducibles según criterio de Hacienda.
            </p>
          </div>

          {/* Modulo 5: WhatsApp Bot */}
          <div 
            onClick={() => onSelectTab('despachos')}
            className="p-4 rounded-xl bg-white shadow-sm border border-[#eaedff] flex flex-col gap-2 hover:border-[#86f2e4] transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#86f2e4] flex items-center justify-center text-[#006a61] shrink-0 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[24px]">chat</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#86f2e4] text-[#006f66] font-['JetBrains_Mono'] text-[11px] font-semibold">
                WhatsApp 24/7
              </span>
            </div>
            <h3 className="font-['Manrope'] text-[17px] text-[#00236f] font-semibold pt-1 flex items-center justify-between">
              <span>Buzón IA y Asistente de Clientes</span>
              <span className="material-symbols-outlined text-[18px] text-[#006a61] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
            </h3>
            <p className="font-['Hanken_Grotesk'] text-[13px] text-[#444651] leading-relaxed">
              Tus autónomos y pymes suben sus facturas enviando un simple audio o foto por WhatsApp. El bot categoriza, reclama facturas pendientes y resuelve dudas de calendario fiscal automáticamente.
            </p>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON: ANTES VS CON GESTORIA */}
      <section className="px-4 py-5 bg-[#eaedff] flex flex-col gap-3.5 my-2 rounded-2xl border border-[#dae2fd]">
        <div className="flex flex-col gap-1 text-center items-center">
          <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#006a61] font-semibold">
            Transformación Operativa
          </span>
          <h2 className="font-['Manrope'] text-[22px] sm:text-[26px] text-[#00236f] font-bold">
            El salto cuántico de tu despacho
          </h2>
        </div>

        {/* Toggle Controls */}
        <div className="flex p-1 rounded-xl bg-[#dae2fd] shadow-inner">
          <button
            onClick={() => setCompareMode('antes')}
            className={`flex-1 py-2 rounded-lg font-['Hanken_Grotesk'] text-[13px] font-semibold transition-all flex items-center justify-center gap-1.5 ${
              compareMode === 'antes'
                ? 'bg-[#00236f] text-white shadow-sm'
                : 'text-[#444651] hover:text-[#131b2e]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">history</span>
            <span>Gestoría Tradicional</span>
          </button>
          <button
            onClick={() => setCompareMode('despues')}
            className={`flex-1 py-2 rounded-lg font-['Hanken_Grotesk'] text-[13px] font-semibold transition-all flex items-center justify-center gap-1.5 ${
              compareMode === 'despues'
                ? 'bg-[#00236f] text-white shadow-sm'
                : 'text-[#444651] hover:text-[#131b2e]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            <span>Con GestorIA</span>
          </button>
        </div>

        {/* Traditional Flow */}
        {compareMode === 'antes' && (
          <div className="p-4 rounded-xl bg-white shadow-sm border border-[#ffdad6] flex flex-col gap-3 animate-in fade-in duration-200">
            <div className="flex items-center gap-2 text-[#ba1a1a] font-semibold text-[14px]">
              <span className="material-symbols-outlined text-[20px]">cancel</span>
              <span>Proceso Manual Lento (Pre-cierre de trimestre)</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-[13px] text-[#444651]">
                <span className="material-symbols-outlined text-[18px] text-[#ba1a1a] shrink-0 mt-0.5">error</span>
                <span>Recepción desordenada de facturas por email, carpetas físicas y fotos borrosas.</span>
              </div>
              <div className="flex items-start gap-2 text-[13px] text-[#444651]">
                <span className="material-symbols-outlined text-[18px] text-[#ba1a1a] shrink-0 mt-0.5">error</span>
                <span>Picado manual dígito a dígito de bases imponibles y cuotas de IVA en el programa contable.</span>
              </div>
              <div className="flex items-start gap-2 text-[13px] text-[#444651]">
                <span className="material-symbols-outlined text-[18px] text-[#ba1a1a] shrink-0 mt-0.5">error</span>
                <span>Días enteros cuadrando el extracto bancario con cobros no identificados.</span>
              </div>
              <div className="flex items-start gap-2 text-[13px] text-[#444651]">
                <span className="material-symbols-outlined text-[18px] text-[#ba1a1a] shrink-0 mt-0.5">error</span>
                <span>Horas extras no remuneradas y estrés extremo cada día 20 del trimestre.</span>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#ffdad6] text-[#93000a] font-['JetBrains_Mono'] text-[11px] font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">schedule</span>
              <span>Tiempo medio por cliente: 4.8 horas/mes</span>
            </div>
          </div>
        )}

        {/* GestorIA Flow */}
        {compareMode === 'despues' && (
          <div className="p-4 rounded-xl bg-white shadow-md border border-[#86f2e4] flex flex-col gap-3 animate-in fade-in duration-200">
            <div className="flex items-center gap-2 text-[#006a61] font-semibold text-[14px]">
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              <span>Flujo Automatizado con GestorIA</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-[13px] text-[#131b2e]">
                <span className="material-symbols-outlined text-[18px] text-[#006a61] shrink-0 mt-0.5">check</span>
                <span>Recepción centralizada: OCR cognitivo procesa documentos en 3.2 segundos.</span>
              </div>
              <div className="flex items-start gap-2 text-[13px] text-[#131b2e]">
                <span className="material-symbols-outlined text-[18px] text-[#006a61] shrink-0 mt-0.5">check</span>
                <span>Generación y conciliación autónoma con subcuentas contables exactas.</span>
              </div>
              <div className="flex items-start gap-2 text-[13px] text-[#131b2e]">
                <span className="material-symbols-outlined text-[18px] text-[#006a61] shrink-0 mt-0.5">check</span>
                <span>Supervisión humana por excepción: el gestor solo revisa alertas clave.</span>
              </div>
              <div className="flex items-start gap-2 text-[13px] text-[#131b2e]">
                <span className="material-symbols-outlined text-[18px] text-[#006a61] shrink-0 mt-0.5">check</span>
                <span>Tiempo liberado para consultoría tributaria de alto valor y captación de clientes.</span>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#86f2e4] text-[#006f66] font-['JetBrains_Mono'] text-[11px] font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">bolt</span>
              <span>Tiempo medio por cliente: 18 minutos/mes (-93%)</span>
            </div>
          </div>
        )}
      </section>

      {/* 5. TESTIMONIOS COLEGIADOS */}
      <section className="px-4 py-5 flex flex-col gap-3.5">
        <div className="flex flex-col gap-1">
          <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#006a61] font-semibold">
            Testimonios Colegiados
          </span>
          <h2 className="font-['Manrope'] text-[22px] sm:text-[26px] text-[#131b2e] font-bold">
            Opiniones de directores de despacho
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {/* Testimonial 1 */}
          <div className="p-4 rounded-xl bg-white shadow-sm border border-[#eaedff] flex flex-col gap-2.5">
            <div className="flex items-center gap-1 text-amber-500">
              <span className="material-symbols-outlined text-[16px] fill-1">star</span>
              <span className="material-symbols-outlined text-[16px] fill-1">star</span>
              <span className="material-symbols-outlined text-[16px] fill-1">star</span>
              <span className="material-symbols-outlined text-[16px] fill-1">star</span>
              <span className="material-symbols-outlined text-[16px] fill-1">star</span>
            </div>
            <p className="font-['Hanken_Grotesk'] text-[14px] text-[#131b2e] italic leading-relaxed">
              “En el último trimestre procesamos 14.000 facturas sin contratar refuerzos temporales. GestorIA nos permitió duplicar la cartera de autónomos sin quemar al equipo.”
            </p>
            <div className="flex items-center gap-3 pt-1 border-t border-[#f2f3ff]">
              <img
                className="w-11 h-11 rounded-full object-cover shrink-0 border border-[#dce1ff]"
                alt="Fernando Mendoza"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7xF0LmISpoM_Tt73SHUI3MLI7JrFId4cF7I71qhcO_8TEw8G_mOnFQ3PpML234fxChI8Pg42GRViz_qxVqtoG3zNkWpvlXlXh_Ywps80C1sRsR50pDb57-H2TDcqsTes8aPJAABpc3EuCnXrMAqNhUy6GbORt0rkXKqDgTybSsZ2okQVIp91k41uWRdw0FfqT92b8QIN5OWCZi9c3gHku2zVwRSVPnvztm3mEAe8UBY5C0mb0ayjm"
              />
              <div className="flex flex-col min-w-0">
                <span className="font-['Manrope'] text-[14px] font-bold text-[#00236f] truncate">
                  Fernando Mendoza
                </span>
                <span className="font-['Hanken_Grotesk'] text-[12px] text-[#444651] truncate">
                  Socio Director, Mendoza & Asociados (Madrid)
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-4 rounded-xl bg-white shadow-sm border border-[#eaedff] flex flex-col gap-2.5">
            <div className="flex items-center gap-1 text-amber-500">
              <span className="material-symbols-outlined text-[16px] fill-1">star</span>
              <span className="material-symbols-outlined text-[16px] fill-1">star</span>
              <span className="material-symbols-outlined text-[16px] fill-1">star</span>
              <span className="material-symbols-outlined text-[16px] fill-1">star</span>
              <span className="material-symbols-outlined text-[16px] fill-1">star</span>
            </div>
            <p className="font-['Hanken_Grotesk'] text-[14px] text-[#131b2e] italic leading-relaxed">
              “El buzón inteligente de WhatsApp resolvió el 90% de los tickets que nos llegaban arrugados el día 18. Se integra a la perfección con nuestro A3 sin cambiar nada.”
            </p>
            <div className="flex items-center gap-3 pt-1 border-t border-[#f2f3ff]">
              <img
                className="w-11 h-11 rounded-full object-cover shrink-0 border border-[#dce1ff]"
                alt="Laura Rovira"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgeBFhDIZmfajRPcJk9Fs_oKf0SJLpehP2xA2oZv4lrA4XnkjZKNHcASEvm6b9LLKcTG8INcp9r5cVyhOCGEzGfONpoOH53200daai7LRYJHL5SyPJIxHgegIOcwrkcCPHv9kSpwORNqFFN6gSAeeDqJ5wEuzEFRV-HN3dFXQxJSUQJeWTnPLqZTJuJAltCB51oWK-rHPK43GNhfBw5ZtLCAK36vhs0dgh9pSir-yynqD1Ydummcsp"
              />
              <div className="flex flex-col min-w-0">
                <span className="font-['Manrope'] text-[14px] font-bold text-[#00236f] truncate">
                  Laura Rovira
                </span>
                <span className="font-['Hanken_Grotesk'] text-[12px] text-[#444651] truncate">
                  Titular Colegiada, Rovira Gestió (Barcelona)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PREGUNTAS FRECUENTES (ACCORDION) */}
      <section className="px-4 py-5 bg-[#f2f3ff] flex flex-col gap-3 my-2 rounded-2xl border border-[#eaedff]">
        <div className="flex flex-col gap-1 text-center">
          <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#006a61] font-semibold">
            Resolución de Dudas
          </span>
          <h2 className="font-['Manrope'] text-[22px] sm:text-[26px] text-[#131b2e] font-bold">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {/* FAQ 1 */}
          <div className="rounded-xl bg-white shadow-sm border border-[#eaedff] overflow-hidden">
            <button
              className="w-full min-h-[48px] px-4 py-3 text-left flex items-center justify-between gap-2 transition-colors hover:bg-[#faf8ff]"
              onClick={() => toggleFaq(1)}
              type="button"
            >
              <span className="font-['Hanken_Grotesk'] text-[14px] text-[#00236f] font-semibold">
                ¿Se integra con mi software contable actual (A3, Sage, Holded)?
              </span>
              <span
                className={`material-symbols-outlined text-[#444651] transition-transform duration-200 text-[20px] ${
                  openFaq === 1 ? 'rotate-180 text-[#00236f]' : ''
                }`}
              >
                expand_more
              </span>
            </button>
            {openFaq === 1 && (
              <div className="px-4 pb-4 pt-1 font-['Hanken_Grotesk'] text-[13px] text-[#444651] leading-relaxed border-t border-[#f2f3ff]">
                Sí. GestorIA exporta e intercambia datos de forma nativa en formatos estándar compatibles con A3ERP/A3ASESOR, Sage 50/200/Despachos, Holded, ContaPlus y ficheros de texto plano / Excel parametrizados. No necesitas migrar tus bases de datos.
              </div>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="rounded-xl bg-white shadow-sm border border-[#eaedff] overflow-hidden">
            <button
              className="w-full min-h-[48px] px-4 py-3 text-left flex items-center justify-between gap-2 transition-colors hover:bg-[#faf8ff]"
              onClick={() => toggleFaq(2)}
              type="button"
            >
              <span className="font-['Hanken_Grotesk'] text-[14px] text-[#00236f] font-semibold">
                ¿Cumple con RGPD y el secreto profesional?
              </span>
              <span
                className={`material-symbols-outlined text-[#444651] transition-transform duration-200 text-[20px] ${
                  openFaq === 2 ? 'rotate-180 text-[#00236f]' : ''
                }`}
              >
                expand_more
              </span>
            </button>
            {openFaq === 2 && (
              <div className="px-4 pb-4 pt-1 font-['Hanken_Grotesk'] text-[13px] text-[#444651] leading-relaxed border-t border-[#f2f3ff]">
                Absolutamente. Toda la infraestructura se aloja en servidores de la Unión Europea (Alemania/España) con cifrado AES-256 en reposo y tránsito. Los datos de tus clientes nunca se emplean para el entrenamiento público de modelos globales y firmamos contrato de encargado de tratamiento DPA según RGPD.
              </div>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="rounded-xl bg-white shadow-sm border border-[#eaedff] overflow-hidden">
            <button
              className="w-full min-h-[48px] px-4 py-3 text-left flex items-center justify-between gap-2 transition-colors hover:bg-[#faf8ff]"
              onClick={() => toggleFaq(3)}
              type="button"
            >
              <span className="font-['Hanken_Grotesk'] text-[14px] text-[#00236f] font-semibold">
                ¿Qué pasa si una factura es ilegible o compleja?
              </span>
              <span
                className={`material-symbols-outlined text-[#444651] transition-transform duration-200 text-[20px] ${
                  openFaq === 3 ? 'rotate-180 text-[#00236f]' : ''
                }`}
              >
                expand_more
              </span>
            </button>
            {openFaq === 3 && (
              <div className="px-4 pb-4 pt-1 font-['Hanken_Grotesk'] text-[13px] text-[#444651] leading-relaxed border-t border-[#f2f3ff]">
                GestorIA utiliza un sistema de verificación de confianza. Si un documento presenta baja resolución o conceptos ambiguos, el sistema lo aísla en el cajón de revisión rápida resaltando el campo dudoso en ámbar para validación con 1 solo clic.
              </div>
            )}
          </div>

          {/* FAQ 4 */}
          <div className="rounded-xl bg-white shadow-sm border border-[#eaedff] overflow-hidden">
            <button
              className="w-full min-h-[48px] px-4 py-3 text-left flex items-center justify-between gap-2 transition-colors hover:bg-[#faf8ff]"
              onClick={() => toggleFaq(4)}
              type="button"
            >
              <span className="font-['Hanken_Grotesk'] text-[14px] text-[#00236f] font-semibold">
                ¿Cuánto tiempo lleva la implantación técnica?
              </span>
              <span
                className={`material-symbols-outlined text-[#444651] transition-transform duration-200 text-[20px] ${
                  openFaq === 4 ? 'rotate-180 text-[#00236f]' : ''
                }`}
              >
                expand_more
              </span>
            </button>
            {openFaq === 4 && (
              <div className="px-4 pb-4 pt-1 font-['Hanken_Grotesk'] text-[13px] text-[#444651] leading-relaxed border-t border-[#f2f3ff]">
                La puesta en marcha es inmediata: tardas menos de 24 horas. Nuestro equipo de soporte técnico para despachos te acompaña en una sesión guiada de 45 minutos para conectar tus plantillas y cuentas tipo.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. CONVERSION LEAD FORM / FINAL CTA */}
      <section className="px-4 py-6 flex flex-col gap-3.5" id="contacto-demo">
        <div className="p-4 sm:p-5 rounded-2xl bg-white shadow-md border border-[#dae2fd] flex flex-col gap-3.5 relative overflow-hidden">
          {/* Ambient accent inside card */}
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#86f2e4]/40 blur-xl pointer-events-none"></div>

          <div className="flex flex-col gap-1">
            <span className="px-2.5 py-0.5 self-start rounded-full bg-[#86f2e4] text-[#006f66] font-['JetBrains_Mono'] text-[11px] font-semibold">
              Prueba de 14 Días Sin Coste
            </span>
            <h3 className="font-['Manrope'] text-[22px] sm:text-[24px] text-[#00236f] font-bold leading-tight">
              Empieza a automatizar tu gestoría hoy mismo
            </h3>
            <p className="font-['Hanken_Grotesk'] text-[13px] text-[#444651]">
              Agenda un piloto con tus propias facturas de prueba y experimenta la velocidad en directo.
            </p>
          </div>

          {/* Lead Capture Form */}
          <form className="flex flex-col gap-3" onSubmit={handleFormSubmit}>
            <div className="flex flex-col gap-1">
              <label className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#131b2e] font-semibold" htmlFor="despachoName">
                Nombre de la Gestoría / Despacho
              </label>
              <input
                className="w-full min-h-[44px] px-3 rounded-lg bg-[#faf8ff] border border-[#cbd5e1] text-[#131b2e] text-[14px] shadow-sm outline-none focus:border-[#00236f] focus:bg-white transition-colors"
                id="despachoName"
                placeholder="Ej. Asesoría Fiscal Pérez & Hnos"
                required
                type="text"
                value={formData.despachoName}
                onChange={(e) => setFormData({ ...formData, despachoName: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#131b2e] font-semibold" htmlFor="profEmail">
                Email Profesional
              </label>
              <input
                className="w-full min-h-[44px] px-3 rounded-lg bg-[#faf8ff] border border-[#cbd5e1] text-[#131b2e] text-[14px] shadow-sm outline-none focus:border-[#00236f] focus:bg-white transition-colors"
                id="profEmail"
                placeholder="director@asesoriaperez.com"
                required
                type="email"
                value={formData.profEmail}
                onChange={(e) => setFormData({ ...formData, profEmail: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#131b2e] font-semibold" htmlFor="telContacto">
                Teléfono de Contacto
              </label>
              <input
                className="w-full min-h-[44px] px-3 rounded-lg bg-[#faf8ff] border border-[#cbd5e1] text-[#131b2e] text-[14px] shadow-sm outline-none focus:border-[#00236f] focus:bg-white transition-colors"
                id="telContacto"
                placeholder="+34 600 000 000"
                required
                type="tel"
                value={formData.telContacto}
                onChange={(e) => setFormData({ ...formData, telContacto: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#131b2e] font-semibold" htmlFor="softwareActual">
                Software Principal
              </label>
              <select
                className="w-full min-h-[44px] px-3 rounded-lg bg-[#faf8ff] border border-[#cbd5e1] text-[#131b2e] text-[14px] shadow-sm outline-none focus:border-[#00236f] focus:bg-white transition-colors"
                id="softwareActual"
                value={formData.softwareActual}
                onChange={(e) => setFormData({ ...formData, softwareActual: e.target.value })}
              >
                <option value="a3">A3ASESOR / Wolters Kluwer</option>
                <option value="sage">Sage Despachos / Sage 50</option>
                <option value="holded">Holded</option>
                <option value="contaplus">ContaPlus</option>
                <option value="otro">Otro software contable</option>
              </select>
            </div>

            {!formSubmitted ? (
              <button
                className="w-full min-h-[48px] mt-1 px-4 py-3 rounded-xl bg-[#00236f] text-white font-['Hanken_Grotesk'] text-[14px] font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-[#1e3a8a] active:scale-[0.98] transition-all disabled:opacity-75"
                disabled={isSubmitting}
                id="submitBtn"
                type="submit"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] animate-spin">sync</span>
                    <span>Procesando solicitud...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                    <span>Agendar Demostración Personalizada</span>
                  </>
                )}
              </button>
            ) : (
              <div className="p-3.5 rounded-lg bg-[#86f2e4] text-[#006f66] font-['Hanken_Grotesk'] text-[13px] font-semibold flex items-center gap-2 animate-in zoom-in-95">
                <span className="material-symbols-outlined text-[22px]">check_circle</span>
                <span>¡Solicitud recibida! Un especialista técnico te contactará en menos de 2 horas.</span>
              </div>
            )}
          </form>

          {/* Reassurance Guarantee Badges */}
          <div className="pt-2 flex flex-col gap-1.5 text-[#444651] font-['JetBrains_Mono'] text-[11px]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#006a61] text-[16px]">verified</span>
              <span>Sin permanencia • Configuración guiada en 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#006a61] text-[16px]">shield</span>
              <span>Acuerdo de Confidencialidad y DPA RGPD vinculante</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
