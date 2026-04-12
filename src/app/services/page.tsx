import ServicesAccordion from '@/components/ServicesAccordion';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-rose-500 via-brand-500 to-red-500 dark:from-rose-300 dark:via-brand-400 dark:to-red-400 bg-clip-text text-transparent mb-4">
            Our Services
          </h1>
          <p className="text-base sm:text-lg text-slate-800 dark:text-white max-w-3xl mx-auto mb-6">
            We offer a wide range of person-centred care and support services designed to help you or your loved ones
            live safely and independently. From Health Appointments and household help to Prescription Pick‑up,
            overnight care, and social activities—our team is here to tailor support to your needs.
          </p>
      
        </div>

        <ServicesAccordion />
      </div>
    </div>
  );
}
