export type ActiveTab = 'inicio' | 'ia-fiscal' | 'facturas' | 'despachos';

export interface InvoiceItem {
  id: string;
  clientName: string;
  clientCif: string;
  supplier: string;
  supplierCif: string;
  invoiceNumber: string;
  date: string;
  baseAmount: number;
  vatRate: number;
  vatAmount: number;
  total: number;
  status: 'validada' | 'pendiente_revision' | 'procesando';
  confidenceScore: number;
  accountDebit: string;
  accountDebitName: string;
  accountCredit: string;
  accountCreditName: string;
  source: 'WhatsApp' | 'Email' | 'Escaner' | 'Portal';
  flagReason?: string;
}

export interface TaxModel {
  id: string;
  code: string;
  title: string;
  period: string;
  status: 'Calculado' | 'Pendiente' | 'Presentado';
  declaredAmount: number;
  discrepanciesCount: number;
  dueDate: string;
  details: {
    base21: number;
    iva21: number;
    base10: number;
    iva10: number;
    deductibleVat: number;
    result: number;
  };
}

export interface ClientProfile {
  id: string;
  name: string;
  cif: string;
  regime: string;
  invoicesThisMonth: number;
  pendingReview: number;
  connectedSoftware: 'A3ASESOR' | 'Sage Despachos' | 'Holded';
  lastActivity: string;
}

export interface ChatMessage {
  id: string;
  sender: 'client' | 'bot';
  time: string;
  text?: string;
  attachment?: {
    type: 'invoice' | 'ticket' | 'bank_receipt';
    title: string;
    amount: string;
  };
  botAction?: string;
}
