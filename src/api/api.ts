// all apis

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const BaseURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3005';

// ============================================
// TYPES & INTERFACES
// ============================================

// Job Opening Types
export interface JobOpening {
  id: string;
  title: string;
  department: string;
  jobCode: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface JobApplication {
  jobId: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  passoutYear: number;
  resumeLink: string;
  coverLetter?: string;
  skills?: string;
  experience?: string;
}

export interface JobApplicationResponse extends JobApplication {
  id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  job: JobOpening;
  jobCode: string;
}

// Contact Message Types
export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ContactMessageResponse extends ContactMessage {
  id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// Issue Ticket Types
export interface IssueTicket {
  name: string;
  email: string;
  subject: string;
  description: string;
  priority?: 'low' | 'medium' | 'high';
}

export interface IssueTicketResponse {
  id: string;
  name: string;
  email: string;
  subject: string;
  description: string;
  priority: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// API Response Types
interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

// ============================================
// API FUNCTIONS
// ============================================

// Careers APIs
const careersApi = {
  // Get all job openings
  getJobOpenings: async (params?: {
    isActive?: boolean;
    department?: string;
    type?: string;
  }): Promise<JobOpening[]> => {
    const queryParams = new URLSearchParams();
    if (params?.isActive !== undefined) queryParams.append('isActive', String(params.isActive));
    if (params?.department) queryParams.append('department', params.department);
    if (params?.type) queryParams.append('type', params.type);

    const response = await fetch(
      `${BaseURL}/api/careers/jobs${queryParams.toString() ? `?${queryParams.toString()}` : ''}`,
      { method: 'GET' }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch job openings');
    }
    
    const result: ApiResponse<JobOpening[]> = await response.json();
    return result.data;
  },

  // Get single job opening
  getJobOpening: async (jobId: string): Promise<JobOpening> => {
    const response = await fetch(`${BaseURL}/api/careers/jobs/${jobId}`, {
      method: 'GET',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch job opening');
    }
    
    const result: ApiResponse<JobOpening> = await response.json();
    return result.data;
  },

  // Submit job application
  submitApplication: async (application: JobApplication): Promise<JobApplicationResponse> => {
    const response = await fetch(`${BaseURL}/api/careers/apply`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(application),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit application');
    }
    
    const result: ApiResponse<JobApplicationResponse> = await response.json();
    return result.data;
  },
};

// Contact APIs
const contactApi = {
  // Submit contact message
  submitMessage: async (message: ContactMessage): Promise<ContactMessageResponse> => {
    const response = await fetch(`${BaseURL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    
    if (!response.ok) {
      throw new Error('Failed to send message');
    }
    
    const result: ApiResponse<ContactMessageResponse> = await response.json();
    return result.data;
  },
};

// Help Center APIs
const helpCenterApi = {
  // Create issue ticket
  createIssueTicket: async (ticket: IssueTicket): Promise<IssueTicketResponse> => {
    const response = await fetch(`${BaseURL}/api/issues`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticket),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create issue ticket');
    }
    
    const result: ApiResponse<IssueTicketResponse> = await response.json();
    return result.data;
  },
};

// ============================================
// REACT QUERY HOOKS
// ============================================

// Careers Hooks
export const useJobOpenings = (params?: {
  isActive?: boolean;
  department?: string;
  type?: string;
}) => {
  return useQuery({
    queryKey: ['jobOpenings', params],
    queryFn: () => careersApi.getJobOpenings(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1, // Only retry once
    retryDelay: 1000, // Wait 1 second before retry
  });
};

export const useJobOpening = (jobId: string) => {
  return useQuery({
    queryKey: ['jobOpening', jobId],
    queryFn: () => careersApi.getJobOpening(jobId),
    enabled: !!jobId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useSubmitApplication = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: careersApi.submitApplication,
    onSuccess: () => {
      // Invalidate job openings query to refetch updated data
      queryClient.invalidateQueries({ queryKey: ['jobOpenings'] });
    },
  });
};

// Contact Hooks
export const useSubmitContactMessage = () => {
  return useMutation({
    mutationFn: contactApi.submitMessage,
  });
};

// Help Center Hooks
export const useCreateIssueTicket = () => {
  return useMutation({
    mutationFn: helpCenterApi.createIssueTicket,
  });
};

// ============================================
// EXPORT API FUNCTIONS (for direct use if needed)
// ============================================

export const api = {
  careers: careersApi,
  contact: contactApi,
  helpCenter: helpCenterApi,
};