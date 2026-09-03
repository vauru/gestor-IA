import { ClientProfile, InvoiceItem, TaxModel, ChatMessage } from './types';

export const INITIAL_INVOICES: InvoiceItem[] = [
  {
    id: 'FAC-2025-0891',
    clientName: 'Innovaciones Digitales S.L.',
    clientCif: 'B-88392014',
    supplier: 'Amazon Web Services EMEA',
    supplierCif: 'LU26375245',
    invoiceNumber: 'INV-ES-992314',
    date: '02/09/2025',
    baseAmount: 450.00,
    vatRate: 21,
    vatAmount: 94.50,
    total: 544.50,
    status: 'validada',
    confidenceScore: 99.8,
    accountDebit: '62900003',
    accountDebitName: 'Servicios Cloud y Servidores',
    accountCredit: '41000028',
    accountCreditName: 'Amazon Web Services EMEA',
    source: 'Email'
  },
  {
    id: 'FAC-2025-0892',
    clientName: 'Talleres García & Hermanos S.L.',
    clientCif: 'B-28941033',
    supplier: 'Repuestos Automoción Madrid S.A.',
    supplierCif: 'A-78231902',
    invoiceNumber: 'A-2025/1109',
    date: '01/09/2025',
    baseAmount: 1280.50,
    vatRate: 21,
    vatAmount: 268.91,
    total: 1549.41,
    status: 'validada',
    confidenceScore: 99.5,
    accountDebit: '60000001',
    accountDebitName: 'Compras de Recambios',
    accountCredit: '40000015',
    accountCreditName: 'Repuestos Automoción Madrid',
    source: 'Escaner'
  },
  {
    id: 'FAC-2025-0893',
    clientName: 'María Gómez Fernández (Autónoma)',
    clientCif: '50982341K',
    supplier: 'Restaurante Asador Don Pelayo',
    supplierCif: 'B-83902931',
    invoiceNumber: 'TKT-2025-884',
    date: '31/08/2025',
    baseAmount: 78.50,
    vatRate: 10,
    vatAmount: 7.85,
    total: 86.35,
    status: 'pendiente_revision',
    confidenceScore: 91.2,
    accountDebit: '62700001',
    accountDebitName: 'Atenciones a Clientes',
    accountCredit: '57000000',
    accountCreditName: 'Caja efectivo',
    source: 'WhatsApp',
    flagReason: 'Revisión preventiva: Gasto en fin de semana. Confirmar motivo comercial para deducción IRPF.'
  },
  {
    id: 'FAC-2025-0894',
    clientName: 'Consultoría Estratégica Iberia',
    clientCif: 'B-87129045',
    supplier: 'Telefónica de España S.A.U.',
    supplierCif: 'A-28015865',
    invoiceNumber: 'TLF-9023412',
    date: '28/08/2025',
    baseAmount: 145.20,
    vatRate: 21,
    vatAmount: 30.49,
    total: 175.69,
    status: 'validada',
    confidenceScore: 99.9,
    accountDebit: '62800002',
    accountDebitName: 'Comunicaciones y Fibra Óptica',
    accountCredit: '41000004',
    accountCreditName: 'Telefónica de España',
    source: 'WhatsApp'
  }
];

export const TAX_MODELS: TaxModel[] = [
  {
    id: 'm-303',
    code: 'Modelo 303',
    title: 'Autoliquidación de IVA Trimestral',
    period: '3T 2025 (Jul - Sep)',
    status: 'Calculado',
    declaredAmount: 8420.45,
    discrepanciesCount: 0,
    dueDate: '20 de Octubre de 2025',
    details: {
      base21: 52400.00,
      iva21: 11004.00,
      base10: 12300.00,
      iva10: 1230.00,
      deductibleVat: 3813.55,
      result: 8420.45
    }
  },
  {
    id: 'm-111',
    code: 'Modelo 111',
    title: 'Retenciones IRPF: Trabajadores y Profesionales',
    period: '3T 2025 (Jul - Sep)',
    status: 'Calculado',
    declaredAmount: 3150.80,
    discrepanciesCount: 0,
    dueDate: '20 de Octubre de 2025',
    details: {
      base21: 21000.00,
      iva21: 0,
      base10: 0,
      iva10: 0,
      deductibleVat: 0,
      result: 3150.80
    }
  },
  {
    id: 'm-115',
    code: 'Modelo 115',
    title: 'Retención de Alquiler de Inmuebles Urbanos',
    period: '3T 2025 (Jul - Sep)',
    status: 'Calculado',
    declaredAmount: 570.00,
    discrepanciesCount: 0,
    dueDate: '20 de Octubre de 2025',
    details: {
      base21: 3000.00,
      iva21: 0,
      base10: 0,
      iva10: 0,
      deductibleVat: 0,
      result: 570.00
    }
  },
  {
    id: 'm-390',
    code: 'Modelo 390',
    title: 'Resumen Anual Informativo de IVA',
    period: 'Ejercicio 2024 (Consolidado)',
    status: 'Presentado',
    declaredAmount: 34190.12,
    discrepanciesCount: 0,
    dueDate: 'Cerrado y presentado telemáticamente',
    details: {
      base21: 198400.00,
      iva21: 41664.00,
      base10: 38200.00,
      iva10: 3820.00,
      deductibleVat: 11293.88,
      result: 34190.12
    }
  }
];

export const CLIENT_LIST: ClientProfile[] = [
  {
    id: 'c1',
    name: 'Talleres García & Hermanos S.L.',
    cif: 'B-28941033',
    regime: 'Sociedad Limitada (Estimación Directa)',
    invoicesThisMonth: 142,
    pendingReview: 0,
    connectedSoftware: 'A3ASESOR',
    lastActivity: 'Conciliación bancaria completada hace 12 min'
  },
  {
    id: 'c2',
    name: 'Innovaciones Digitales S.L.',
    cif: 'B-88392014',
    regime: 'Sociedad Limitada (Régimen General)',
    invoicesThisMonth: 89,
    pendingReview: 1,
    connectedSoftware: 'Sage Despachos',
    lastActivity: 'Factura AWS procesada hace 35 min'
  },
  {
    id: 'c3',
    name: 'María Gómez Fernández',
    cif: '50982341K',
    regime: 'Autónomo en Módulos / IRPF Simplificado',
    invoicesThisMonth: 34,
    pendingReview: 1,
    connectedSoftware: 'Holded',
    lastActivity: 'Ticket WhatsApp recibido hace 1h'
  },
  {
    id: 'c4',
    name: 'Restaurante El Puerto Gourmet S.L.',
    cif: 'B-73410294',
    regime: 'Sociedad Limitada (Hostelería)',
    invoicesThisMonth: 215,
    pendingReview: 0,
    connectedSoftware: 'A3ASESOR',
    lastActivity: 'Cierre de caja sincronizado hoy 08:30 AM'
  }
];

export const INITIAL_CHAT: ChatMessage[] = [
  {
    id: 'm1',
    sender: 'client',
    time: '10:14',
    text: 'Hola Gestoría! Os paso el ticket del desayuno de trabajo con el nuevo distribuidor de Valencia.'
  },
  {
    id: 'm2',
    sender: 'client',
    time: '10:15',
    attachment: {
      type: 'ticket',
      title: 'Ticket_Cafeteria_Plaza.jpg',
      amount: '24,80 €'
    }
  },
  {
    id: 'm3',
    sender: 'bot',
    time: '10:15',
    text: '¡Recibido! 📸 He analizado la imagen:\n• Emisor: Cafetería Central S.L. (B-46901234)\n• Fecha: Hoy 03/09/2026\n• Total: 24,80 € (Base: 22,55 € | IVA 10%: 2,25 €)\n\n¿Podrías indicarme el nombre de la empresa del distribuidor para que quede 100% justificado ante Hacienda?',
    botAction: 'Auto-Asiento generado provisionalmente en subcuenta 62700001 (Relaciones Públicas)'
  },
  {
    id: 'm4',
    sender: 'client',
    time: '10:16',
    text: 'Sí claro, es Distribuciones Levante 2020 S.L.'
  },
  {
    id: 'm5',
    sender: 'bot',
    time: '10:16',
    text: 'Perfecto, añadido a la memoria del asiento y vinculado en tu A3ASESOR. ¡Todo cuadrado!',
    botAction: 'Asiento contabilizado con éxito en diario contable (Asiento #1.492)'
  }
];
