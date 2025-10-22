import emailjs from '@emailjs/browser';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_iwy8ymh',
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'template_qurnyux',
  meetingTemplateId: import.meta.env.VITE_EMAILJS_MEETING_TEMPLATE_ID || 'template_rmb9x2o',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'zFG-PCq0DeY4mKq14',
};

interface ContactEmailParams {
  name: string;
  email: string;
  message: string;
}

interface MeetingRequestParams {
  name: string;
  email: string;
  message: string;
  date: Date;
  time: string;
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

    // Debug: Log current configuration
    console.log('🔧 EmailJS Config:', EMAILJS_CONFIG);
    
    // Check if EmailJS is configured
    if (
      EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' ||
      EMAILJS_CONFIG.contactTemplateId === 'YOUR_CONTACT_TEMPLATE_ID' ||
      EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY'
    ) {
      console.warn('EmailJS (Contact Form) is not configured yet. Please set up your credentials.');
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
    const templateParams = {
      from_name: params.name,
      from_email: params.email,
      message: params.message,
      reply_to: params.email,
    };

    console.log('📧 Sending email with params:', templateParams);

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.contactTemplateId,
      templateParams,
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


/**
 * Sends a meeting request email using EmailJS
 * @param params - Meeting request data
 * @returns Promise with success status
 */
export const sendMeetingRequestEmail = async (
  params: MeetingRequestParams
): Promise<EmailResult> => {
  try {
    // Basic validation
    if (!params.name || !params.email || !params.date || !params.time) {
      return { success: false, error: 'Missing required fields' };
    }

    // Check if EmailJS is configured for meetings
    if (
      EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' ||
      EMAILJS_CONFIG.meetingTemplateId === 'YOUR_MEETING_TEMPLATE_ID' ||
      EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY'
    ) {
      console.warn('EmailJS (Meeting Scheduler) is not configured yet. Please set up your credentials.');
      console.log('📧 Meeting request would be sent:', {
        to: 'info@bestrontechnology.com',
        ...params,
        formattedDate: format(params.date, 'EEEE, d MMMM yyyy', { locale: tr }),
      });
      return { success: true };
    }
    
    // Format date for the email template
    const templateParams = {
      to_email: 'info@bestrontechnology.com',
      from_name: params.name,
      from_email: params.email,
      meeting_date: format(params.date, 'EEEE, d MMMM yyyy', { locale: tr }),
      meeting_time: params.time,
      message: params.message,
      reply_to: params.email,
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.meetingTemplateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    if (response.status === 200) {
      console.log('✅ Meeting request sent successfully');
      return { success: true };
    } else {
      return { success: false, error: 'Failed to send meeting request' };
    }
  } catch (error) {
    console.error('❌ Meeting request send error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

