// Simulated SmileID Identity Verification wrapper
export interface KYCRequest {
  idNumber: string;
  documentType: 'NATIONAL_ID' | 'PASSPORT' | 'ALIEN_CARD';
  selfieImageBase64?: string;
}

export interface KYCResponse {
  success: boolean;
  score: number;
  fullName?: string;
  message: string;
}

export const smileIdApi = {
  async verifyIdentity(data: KYCRequest): Promise<KYCResponse> {
    console.log('[SmileID] Verifying ID:', data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    if (data.idNumber.length < 5) {
      return { success: false, score: 0, message: 'Invalid ID Number format' };
    }

    return {
      success: true,
      score: 98.5,
      fullName: 'JOHN KAMAU',
      message: 'Identity Verified Successfully',
    };
  }
};
