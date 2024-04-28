
import { h, Fragment  } from 'preact';
import { useEffect } from 'preact/hooks';

const GoogleAnalytics = () => {
  useEffect(() => {
    window['dataLayer'] = window['dataLayer'] || [];
    function gtag(...args) {
      window['dataLayer'].push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-TH5CKVB2E8');

    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-TH5CKVB2E8';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
};

export default GoogleAnalytics;