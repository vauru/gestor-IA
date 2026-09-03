import React, { useState } from 'react';

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToWorkbench: () => void;
}

export const VideoTourModal: React.FC<VideoTourModalProps> = ({ isOpen, onClose, onGoToWorkbench }) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      title: '1. Recepción Multicanal Desatendida',
      subtitle: 'Tus clientes envían facturas como prefieran',
      desc: 'Por WhatsApp con un simple audio o foto, por email directo (ej: facturas@tudespacho.com), o escaneando tacos de papel en escáner de alta velocidad.',
      icon: 'send_to_mobile',
      tag: 'WhatsApp / Escáner / Correo'
    },
    {
      title: '2. OCR Cognitivo y Extracción 3.2s',
      subtitle: 'Lectura inteligente campo a campo',
      desc: 'Reconocimiento de NIF emisor, bases imponibles desglosadas por tipo de IVA (21%, 10%, 4%), retenciones de IRPF y fechas de vencimiento con un 99.8% de precisión.',
      icon: 'psychology',
      tag: 'Precisión Multimodelo 99.8%'
    },
    {
      title: '3. Generación Autónoma de Asientos PGC',
      subtitle: 'Asignación matemática de subcuentas contables',
      desc: 'El motor aprende el histórico de compras de cada cliente. Asigna automáticamente cuentas de gasto (600, 628, 629) y acreedores/proveedores (400, 410).',
      icon: 'account_tree',
      tag: 'Debe y Haber Cuadrado'
    },
    {
      title: '4. Sincronización en 1 Clic con tu ERP',
      subtitle: 'Integración nativa sin cambiar de software',
      desc: 'Genera ficheros SUENLACE diarios o conecta vía API directa con A3ASESOR, Sage Despachos, Holded o ContaPlus sin alterar tu rutina de trabajo.',
      icon: 'sync_alt',
      tag: 'A3ASESOR / Sage / Holded'
    }
  ];

  const current = steps[activeStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131b2e]/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl border border-[#eaedff] relative flex flex-col gap-4 animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f2f3ff] text-[#444651] flex items-center justify-center hover:bg-[#eaedff] transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex flex-col gap-1 pr-6">
          <span className="px-2.5 py-0.5 self-start rounded-full bg-[#86f2e4] text-[#006f66] font-['JetBrains_Mono'] text-[11px] font-semibold">
            Tour Guiado • 2 Minutos
          </span>
          <h3 className="font-['Manrope'] text-[20px] font-bold text-[#00236f]">
            Así funciona la automatización
          </h3>
        </div>

        {/* Step Visualizer */}
        <div className="p-4 rounded-xl bg-[#faf8ff] border border-[#eaedff] flex flex-col gap-3 min-h-[190px]">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-lg bg-[#00236f] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">{current.icon}</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#dce1ff] text-[#00236f] font-['JetBrains_Mono'] text-[10px] font-semibold">
              {current.tag}
            </span>
          </div>

          <div>
            <h4 className="font-['Manrope'] text-[16px] font-bold text-[#00236f]">
              {current.title}
            </h4>
            <p className="font-['Hanken_Grotesk'] text-[12px] font-semibold text-[#006a61]">
              {current.subtitle}
            </p>
            <p className="font-['Hanken_Grotesk'] text-[13px] text-[#444651] mt-1 leading-relaxed">
              {current.desc}
            </p>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`h-2 rounded-full transition-all ${
                  activeStep === i ? 'w-6 bg-[#00236f]' : 'w-2 bg-[#dae2fd]'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            {activeStep < steps.length - 1 ? (
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className="px-3.5 py-1.5 rounded-lg bg-[#00236f] text-white font-['Hanken_Grotesk'] text-[13px] font-semibold flex items-center gap-1"
              >
                <span>Siguiente</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  onGoToWorkbench();
                }}
                className="px-3.5 py-1.5 rounded-lg bg-[#006a61] text-white font-['Hanken_Grotesk'] text-[13px] font-semibold flex items-center gap-1"
              >
                <span>Probar Workbench</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
