// Simulated M-Pesa Daraja API wrapper
export interface PushRequest {
  phoneNumber: string;
  amount: number;
  accountReference: string;
}

export interface PushResponse {
  merchantRequestId: string;
  checkoutRequestId: string;
  responseCode: string;
  customerMessage: string;
}

export const mpesaApi = {
  async initiateSTKPush(data: PushRequest): Promise<PushResponse> {
    console.log('[M-Pesa] Initiating STK Push:', data);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    return {
      merchantRequestId: `REQ-${Math.random().toString(36).substring(7)}`,
      checkoutRequestId: `CHK-${Math.random().toString(36).substring(7)}`,
      responseCode: '0',
      customerMessage: 'Success. Request accepted for processing',
    };
  },

  async queryStatus(checkoutRequestId: string): Promise<boolean> {
    console.log(`[M-Pesa] Querying status for ${checkoutRequestId}`);
    await new Promise((resolve) => setTimeout(resolve, 800));
    return true; // Simulate successful completion
  }
};
