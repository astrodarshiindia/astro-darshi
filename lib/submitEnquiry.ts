export interface EnquiryPayload {
  name: string;
  email?: string;
  phone?: string;
  service_type: string;
  message: string;
  source_page?: string;
}

export async function submitEnquiry(
  payload: EnquiryPayload
): Promise<{ success: boolean; error?: string }> {
  const message = payload.source_page
    ? `[${payload.source_page}]\n\n${payload.message}`
    : payload.message;

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      service_type: payload.service_type,
      message,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    return { success: false, error: data.error || 'Failed to submit enquiry' };
  }

  return { success: true };
}
