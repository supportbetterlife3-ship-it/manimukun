export default function Head() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manimukundeshwor.org';
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'Manimukundeshwor',
    legalName: 'Manimukundeshwor',
    url: siteUrl,
    logo: `${siteUrl}/logonew.png`,
    image: `${siteUrl}/vulture2.jpg`,
    email: 'info@manimukundeshwor.org',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chapakot-8',
      addressLocality: 'Syangja',
      addressRegion: 'Gandaki Province',
      addressCountry: 'NP',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Kaligandaki River Corridor',
    },
    description:
      'Nonprofit conservation organisation protecting critically endangered vultures through cow shelter, vulture safe feeding, habitat protection, and community education.',
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){try{const t=localStorage.getItem('theme');const p=window.matchMedia('(prefers-color-scheme: dark)').matches;const d=t==='dark'||(!t&&p);const h=document.documentElement;if(d){h.classList.add('dark');h.style.colorScheme='dark'}else{h.classList.remove('dark');h.style.colorScheme='light'}}catch(e){}})()`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}
