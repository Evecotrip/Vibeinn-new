import { supabase } from '../lib/supabase';

interface SubscriptionResponse {
  success: boolean;
  message: string;
}

// Simple email validation
export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Store emails in Supabase
export const subscribeEmail = async (email: string): Promise<SubscriptionResponse> => {
  try {
    // Validate email
    if (!validateEmail(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      };
    }
    
    // Check if email already exists in Supabase
    const { data: existingSubscriber } = await supabase
      .from('subscribers')
      .select('email')
      .eq('email', email)
      .single();
    
    if (existingSubscriber) {
      return {
        success: true,
        message: "You're already subscribed! We'll keep you updated.",
      };
    }
    
    // Add new email to Supabase
    const { error } = await supabase
      .from('subscribers')
      .insert([{ email, subscribed_at: new Date() }]);
    
    if (error) {
      console.error("Supabase error:", error);
      return {
        success: false,
        message: "There was an error processing your subscription. Please try again.",
      };
    }
    
    return {
      success: true,
      message: "Thank you for subscribing to Vibeinn updates!",
    };
    
  } catch (error) {
    console.error("Subscription error:", error);
    return {
      success: false,
      message: "There was an error processing your subscription. Please try again.",
    };
  }
};
