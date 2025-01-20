declare namespace AlexAndAsher {
  type BaseDBType = {
    _id: Id;
    createdAt: Date;
    updatedAt: Date;
  }

  export type Customer = BaseDBType & {
    email: string;
    name: string;
    stripeId: string;
  }

  export type PaymentUpdateRequest = BaseDBType & {
    customerId: Customer["_id"];
    expired: boolean;
    updateAuthToken: string;
  }

  export type StripeCustomer = {
    address: unknown;
    balance: number;
    created: number;
    currency: unknown;
    default_source: unknown;
    delinquent: boolean;
    description: unknown;
    discount: unknown;
    email: string;
    id: string;
    invoice_prefix: string;
    invoice_settings: {
      custom_fields: unknown;
      default_payment_method: unknown;
      footer: unknown;
      rendering_options: unknown;
    };
    livemode: boolean;
    metadata: Record<string, any>;
    name: string;
    next_invoice_sequence: number;
    object: string;
    phone: unknown;
    preferred_locales: Array<any>;
    shipping: unknown;
    tax_exempt: string;
    test_clock: unknown;
  }
}
