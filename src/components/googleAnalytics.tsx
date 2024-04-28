import { useEffect } from 'preact/hooks';

const GoogleAnalytics = () => {
  useEffect(() => {
    window['dataLayer'] = window['dataLayer'] || [];
    function gtag(...args) {
      window['dataLayer'].push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-TH5CKVB2E8'); 
  }, []);

  return null;
}

export default GoogleAnalytics;