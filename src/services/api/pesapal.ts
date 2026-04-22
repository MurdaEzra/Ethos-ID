// Simulated PesaPal Payment wrapper
export interface PaymentOrder {
  amount: number;
  currency: 'KES' | 'USD';
  description: string;
  email: string;
}

export interface OrderResponse {
  orderTrackingId: string;
  paymentUrl: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
}

export const pesapalApi = {
  async createPayment(order: PaymentOrder): Promise<OrderResponse> {
    console.log('[PesaPal] Creating payment order:', order);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    return {
      orderTrackingId: `P-${Date.now()}`,
      paymentUrl: `https://dummy-pesapal.com/pay/${Date.now()}`,
      status: 'PENDING',
    };
  }
};
