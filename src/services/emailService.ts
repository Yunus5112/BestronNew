import emailjs from '@emailjs/browser';

// EmailJS Configuration
// TODO: Replace these with your actual EmailJS credentials
// Get them from: https://www.emailjs.com/
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
};

interface ContactEmailParams {
  name: string;
  email: string;
  message: string;
}

interface EmailResult {
  success: boolean;
  error?: string;
}

/**
 * Sends a contact form email using EmailJS
 * @param params - Contact form data
 * @returns Promise with success status
 */
export const sendContactEmail = async (
  params: ContactEmailParams
): Promise<EmailResult> => {
  try {
    // Validate inputs
    if (!params.name || !params.email || !params.message) {
      return {
        success: false,
        error: 'All fields are required',
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(params.email)) {
      return {
        success: false,
        error: 'Invalid email format',
      };
    }

    // Check if EmailJS is configured
    if (
      EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' ||
      EMAILJS_CONFIG.templateId === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY'
    ) {
      console.warn('EmailJS is not configured yet. Please set up your credentials.');
      // For development: log the email instead
      console.log('📧 Email would be sent:', {
        to: 'info@bestrontechnology.com',
        from: params.email,
        name: params.name,
        message: params.message,
      });
      return {
        success: true,
      };
    }

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        to_email: 'info@bestrontechnology.com',
        from_name: params.name,
        from_email: params.email,
        message: params.message,
        reply_to: params.email,
      },
      EMAILJS_CONFIG.publicKey
    );

    if (response.status === 200) {
      console.log('✅ Email sent successfully');
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        error: 'Failed to send email',
      };
    }
  } catch (error) {
    console.error('❌ Email send error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

