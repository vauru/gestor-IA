import React, { useState } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [despacho, setDespacho] = useState('');
  const [email, setEmail] = useState('');
  const [software, setSoftware] = useState('A3ASESOR');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // close after feedback
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131b2e]/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl border border-[#eaedff] relative flex flex-col gap-4 animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f2f3ff] text-[#444651] flex items-center justify-center hover:bg-[#eaedff] transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {!submitted ? (
          <>
            <div className="flex flex-col gap-1 pr-6">
              <span className="px-2.5 py-0.5 self-start rounded-full bg-[#86f2e4] text-[#006f66] font-['JetBrains_Mono'] text-[11px] font-semibold">
                Acceso Inmediato
              </span>
              <h3 className="font-['Manrope'] text-[20px] font-bold text-[#00236f]">
                Demo Gratuita de 14 Días
              </h3>
              <p className="font-['Hanken_Grotesk'] text-[13px] text-[#444651]">
                Configuramos un entorno sandbox con tus propias facturas de prueba sin coste ni compromiso.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-['JetBrains_Mono'] text-[11px] uppercase font-semibold text-[#131b2e]">
                  Nombre de la Asesoría / Gestoría
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Asesores Tributarios Madrid"
                  value={despacho}
                  onChange={(e) => setDespacho(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#faf8ff] border border-[#cbd5e1] text-[13.5px] outline-none focus:border-[#00236f]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-['JetBrains_Mono'] text-[11px] uppercase font-semibold text-[#131b2e]">
                  Email Profesional
                </label>
                <input
                  type="email"
                  required
                  placeholder="director@despacho.es"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#faf8ff] border border-[#cbd5e1] text-[13.5px] outline-none focus:border-[#00236f]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-['JetBrains_Mono'] text-[11px] uppercase font-semibold text-[#131b2e]">
                  Software Contable
                </label>
                <select
                  value={software}
                  onChange={(e) => setSoftware(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#faf8ff] border border-[#cbd5e1] text-[13.5px] outline-none focus:border-[#00236f]"
                >
                  <option value="A3ASESOR">A3ASESOR / Wolters Kluwer</option>
                  <option value="Sage">Sage Despachos / 50</option>
                  <option value="Holded">Holded</option>
                  <option value="ContaPlus">ContaPlus</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full min-h-[46px] mt-2 rounded-xl bg-[#00236f] text-white font-['Hanken_Grotesk'] text-[14px] font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-[#1e3a8a] active:scale-[0.98] transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                <span>Activar Licencia Demo 14 Días</span>
              </button>
            </form>

            <div className="text-[11px] text-[#444651] font-['JetBrains_Mono'] flex items-center gap-1.5 pt-1">
              <span className="material-symbols-outlined text-[16px] text-[#006a61]">verified</span>
              <span>Sin tarjeta de crédito • Soporte colegiado incluido</span>
            </div>
          </>
        ) : (
          <div className="py-6 flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-[#86f2e4] text-[#006f66] flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <h4 className="font-['Manrope'] text-[20px] font-bold text-[#00236f]">
              ¡Entorno Demo Creado!
            </h4>
            <p className="font-['Hanken_Grotesk'] text-[13px] text-[#444651] max-w-xs">
              Hemos enviado las credenciales provisionales a <strong className="text-[#131b2e]">{email}</strong>. Tu gestor de cuenta asignado te contactará hoy mismo.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-5 py-2 rounded-xl bg-[#00236f] text-white font-['Hanken_Grotesk'] text-[13px] font-semibold"
            >
              Entendido
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
