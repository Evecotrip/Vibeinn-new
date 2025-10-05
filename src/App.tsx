import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";
import { ThemeProvider } from "./context/ThemeProvider";

// Import page components from app directory
import Home from "./app/page";
import AboutUs from "./app/about-us/page";
import Blog from "./app/blog/page";
import Careers from "./app/careers/page";
import JobDetail from "./app/careers/[id]/page";
import Contact from "./app/contact/page";
import Community from "./app/community/page";
import CookiePolicy from "./app/cookie-policy/page";
import HelpCenter from "./app/help-center/page";
import Terms from "./app/terms/page";
import Privacy from "./app/privacy/page";
import Press from "./app/press/page";
import Services from "./app/services/page";
import PortfolioPage from "./app/portfolio/page";
import LMSPage from "./app/products/lms/page";
import HRMSPage from "./app/products/hrms/page";
import CRMPage from "./app/products/crm/page";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Routes for app directory pages */}
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:id" element={<JobDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/community" element={<Community />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/press" element={<Press />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<PortfolioPage />} />

            {/* Product pages */}
            <Route path="/products/lms" element={<LMSPage />} />
            <Route path="/products/hrms" element={<HRMSPage />} />
            <Route path="/products/crm" element={<CRMPage />} />

            {/* Catch-all route for 404 Not Found */}
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/500" element={<NotFound />} />
            <Route path="/500" element={<NotFound />} />
            <Route path="/error" element={<NotFound />} />
            <Route path="/oops" element={<NotFound />} />
            <Route path="/something-went-wrong" element={<NotFound />} />
            <Route path="/page-not-found" element={<NotFound />} />
            <Route path="/page-not-exist" element={<NotFound />} />
            <Route path="/page-not-found" element={<NotFound />} />
            <Route path="/page-not-exist" element={<NotFound />} />
            <Route path="/page-not-found" element={<NotFound />} />
            <Route path="/page-not-exist" element={<NotFound />} />
            <Route path="/page-not-found" element={<NotFound />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
