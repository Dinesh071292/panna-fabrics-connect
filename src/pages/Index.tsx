import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

// Lazy load components that are below the fold
const About = lazy(() => import("@/components/About"));
const Products = lazy(() => import("@/components/Products"));
const Services = lazy(() => import("@/components/Services"));
const Contact = lazy(() => import("@/components/Contact"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted"></div>}>
        <div id="about">
          <About />
        </div>
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted"></div>}>
        <div id="products">
          <Products />
        </div>
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted"></div>}>
        <div id="services">
          <Services />
        </div>
      </Suspense>
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted"></div>}>
        <div id="contact">
          <Contact />
        </div>
      </Suspense>
    </div>
  );
};

export default Index;
