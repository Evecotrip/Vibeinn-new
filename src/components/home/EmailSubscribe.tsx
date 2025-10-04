
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { subscribeEmail } from "@/utils/emailSubscription";

const EmailSubscribe = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await subscribeEmail(email);
      
      // Show appropriate toast based on response
      toast({
        title: response.success ? "Success" : "Attention",
        description: response.message,
        variant: response.success ? "default" : "destructive",
        // Add icon to toast
        action: (
          <div className="h-5 w-5 text-current">
            {response.success ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
          </div>
        ),
      });
      
      // Clear form if successful
      if (response.success) {
        setEmail("");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-12 pt-10 border-t border-white/20 animate-on-scroll opacity-0">
      <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
      <p className="text-white/90 mb-6 max-w-lg mx-auto">
        Get the latest news, updates, and exclusive offers from Vibeinn straight to your inbox.
      </p>
      
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/30"
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className="bg-white text-blue-600 hover:bg-white/90 font-medium flex items-center gap-2"
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default EmailSubscribe;
