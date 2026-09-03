import React, { useState } from 'react';
import { CLIENT_LIST, INITIAL_CHAT } from '../data';
import { ChatMessage, ClientProfile } from '../types';

export const DespachosScreen: React.FC = () => {
  const [clients] = useState<ClientProfile[]>(CLIENT_LIST);
  const [selectedClient, setSelectedClient] = useState<ClientProfile>(CLIENT_LIST[2]); // María Gómez
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_CHAT);
  const [inputText, setInputText] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'client',
      time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
      text: text
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsBotTyping(true);

    setTimeout(() => {
      let reply = 'He recibido tu mensaje. Lo registro en el expediente de tu empresa y lo vinculo a tu gestor.';
      let action: string | undefined = undefined;

      const lower = text.toLowerCase();
      if (lower.includes('gasolina') || lower.includes('combustible')) {
        reply = '📸 Ticket de combustible Repsol analizado:\n• Base: 37,19 € | IVA (21%): 7,81 € | Total: 45,00 €\n• Vinculado a la subcuenta 62800005.\n¿Es de un vehículo afecto 100% a la actividad para deducir el 100% del IVA o 50% según criterio de Hacienda?';
        action = 'Auto-asiento registrado en borrador pendiente de confirmación de afectación.';
      } else if (lower.includes('303') || lower.includes('plazo') || lower.includes('fecha')) {
        reply = '📅 El plazo de domiciliación del Modelo 303 (3T 2025) finaliza el 15 de Octubre de 2025 (presentación hasta el 20 de Octubre). Tu estimación actual calculada por GestorIA está lista para revisión.';
      } else if (lower.includes('tgss') || lower.includes('certificado') || lower.includes('corriente')) {
        reply = '📄 Descargando de forma desatendida el Certificado de estar al Corriente de Pago con la Seguridad Social (TGSS) mediante certificado SILTRA... ¡Listo! Enviado copia a tu email.';
        action = 'Certificado oficial descargado y archivado en nube colegiada.';
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
        text: reply,
        botAction: action
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsBotTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto md:max-w-2xl lg:max-w-3xl px-4 py-4 gap-4">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-0.5 rounded-full bg-[#86f2e4] text-[#006f66] font-['JetBrains_Mono'] text-[11px] font-semibold">
          <span className="material-symbols-outlined text-[16px]">whatsapp</span>
          ASISTENTE CONVERSACIONAL 24/7
        </div>
        <h1 className="font-['Manrope'] text-[24px] sm:text-[28px] text-[#00236f] font-bold">
          Despachos y Buzón Autónomo WhatsApp
        </h1>
        <p className="font-['Hanken_Grotesk'] text-[13px] text-[#444651]">
          Tus clientes autónomos y pymes suben tickets y resuelven dudas por WhatsApp sin interrumpir a los contables del despacho.
        </p>
      </div>

      {/* Integration Status Bar */}
      <div className="p-3.5 rounded-xl bg-white shadow-sm border border-[#eaedff] flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 min-w-max">
          <span className="w-2.5 h-2.5 rounded-full bg-[#006a61] animate-pulse"></span>
          <span className="font-['JetBrains_Mono'] text-[12px] font-bold text-[#00236f]">A3ASESOR: Conectado</span>
        </div>
        <span className="text-[#cbd5e1]">•</span>
        <div className="flex items-center gap-2 min-w-max">
          <span className="w-2.5 h-2.5 rounded-full bg-[#006a61]"></span>
          <span className="font-['JetBrains_Mono'] text-[12px] font-bold text-[#00236f]">Sage Despachos: Activo</span>
        </div>
        <span className="text-[#cbd5e1]">•</span>
        <div className="flex items-center gap-2 min-w-max">
          <span className="w-2.5 h-2.5 rounded-full bg-[#006a61]"></span>
          <span className="font-['JetBrains_Mono'] text-[12px] font-bold text-[#00236f]">Norma 43: 07:00 AM</span>
        </div>
      </div>

      {/* Clients Selector Pills */}
      <div className="flex flex-col gap-1.5">
        <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#444651] font-semibold">
          Seleccionar Cliente / Expediente
        </span>
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {clients.map((c) => {
            const isSelected = selectedClient.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedClient(c)}
                className={`px-3 py-2 rounded-xl text-left shrink-0 transition-all border ${
                  isSelected
                    ? 'bg-[#00236f] text-white border-[#00236f] shadow-sm'
                    : 'bg-white text-[#131b2e] border-[#eaedff] hover:border-[#86f2e4]'
                }`}
              >
                <div className="font-['Manrope'] text-[13px] font-bold truncate max-w-[170px]">
                  {c.name}
                </div>
                <div className={`font-['JetBrains_Mono'] text-[10px] ${isSelected ? 'text-[#86f2e4]' : 'text-[#444651]'}`}>
                  {c.cif} • {c.connectedSoftware}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive WhatsApp Simulator View */}
      <div className="rounded-2xl bg-white shadow-md border border-[#dae2fd] overflow-hidden flex flex-col h-[520px]">
        {/* Chat Window Header */}
        <div className="p-3 bg-[#00236f] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-[#006a61] flex items-center justify-center text-white font-bold text-xs">
                MG
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#86f2e4] ring-2 ring-[#00236f]"></span>
            </div>
            <div>
              <h4 className="font-['Manrope'] text-[14px] font-bold leading-tight">
                {selectedClient.name} (WhatsApp)
              </h4>
              <p className="font-['JetBrains_Mono'] text-[10.5px] text-[#86f2e4]">
                GestorIA Asistente 24/7 activo • CIF: {selectedClient.cif}
              </p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#1e3a8a] text-white font-['JetBrains_Mono'] text-[10px] font-semibold">
            {selectedClient.connectedSoftware}
          </span>
        </div>

        {/* Quick Simulator Prompts */}
        <div className="px-3 py-2 bg-[#f2f3ff] border-b border-[#eaedff] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="font-['JetBrains_Mono'] text-[10px] text-[#444651] uppercase font-semibold shrink-0">
            Simular:
          </span>
          <button
            onClick={() => handleSendMessage('Te paso el ticket de gasolina del camión por 45,00 €')}
            className="px-2.5 py-1 rounded-full bg-white border border-[#cbd5e1] text-[#00236f] text-[11.5px] font-['Hanken_Grotesk'] font-medium shrink-0 hover:bg-[#faf8ff]"
          >
            ⛽ Ticket Gasolina 45 €
          </button>
          <button
            onClick={() => handleSendMessage('¿Hasta qué día tengo para presentar el Modelo 303 de este trimestre?')}
            className="px-2.5 py-1 rounded-full bg-white border border-[#cbd5e1] text-[#00236f] text-[11.5px] font-['Hanken_Grotesk'] font-medium shrink-0 hover:bg-[#faf8ff]"
          >
            📅 Fecha límite Modelo 303
          </button>
          <button
            onClick={() => handleSendMessage('Necesito un certificado de estar al corriente con la TGSS para una licitación')}
            className="px-2.5 py-1 rounded-full bg-white border border-[#cbd5e1] text-[#00236f] text-[11.5px] font-['Hanken_Grotesk'] font-medium shrink-0 hover:bg-[#faf8ff]"
          >
            📄 Certificado TGSS
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#faf8ff]">
          {messages.map((m) => {
            const isBot = m.sender === 'bot';
            return (
              <div
                key={m.id}
                className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-3 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                    isBot
                      ? 'bg-white text-[#131b2e] border border-[#eaedff] rounded-tl-none'
                      : 'bg-[#00236f] text-white rounded-tr-none'
                  }`}
                >
                  {/* Attachment if present */}
                  {m.attachment && (
                    <div className="mb-2 p-2 rounded-lg bg-white/10 border border-white/20 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px] text-[#86f2e4]">
                        receipt_long
                      </span>
                      <div className="min-w-0">
                        <span className="font-['JetBrains_Mono'] text-[11px] font-bold block truncate">
                          {m.attachment.title}
                        </span>
                        <span className="font-['JetBrains_Mono'] text-[10px] opacity-80">
                          Total detectado: {m.attachment.amount}
                        </span>
                      </div>
                    </div>
                  )}

                  <p className="whitespace-pre-line font-['Hanken_Grotesk']">{m.text}</p>

                  {/* Bot backend action tag */}
                  {m.botAction && (
                    <div className="mt-2 pt-2 border-t border-[#f2f3ff] text-[11px] text-[#006f66] font-['JetBrains_Mono'] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                      <span>{m.botAction}</span>
                    </div>
                  )}

                  <span className={`text-[10px] mt-1 block text-right font-['JetBrains_Mono'] ${
                    isBot ? 'text-[#444651]' : 'text-white/70'
                  }`}>
                    {m.time}
                  </span>
                </div>
              </div>
            );
          })}

          {isBotTyping && (
            <div className="flex items-center gap-1.5 p-2 bg-white rounded-xl border border-[#eaedff] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#00236f] animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-[#006a61] animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 rounded-full bg-[#86f2e4] animate-bounce [animation-delay:0.4s]"></span>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#444651] ml-1">GestorIA procesando...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-2.5 bg-white border-t border-[#eaedff] flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Escribe como si fueras el cliente..."
            className="flex-1 px-3 py-2 rounded-xl bg-[#faf8ff] border border-[#cbd5e1] text-[13.5px] outline-none focus:border-[#00236f] text-[#131b2e]"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isBotTyping}
            className="w-10 h-10 rounded-xl bg-[#00236f] text-white flex items-center justify-center hover:bg-[#1e3a8a] transition-all disabled:opacity-50 shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
