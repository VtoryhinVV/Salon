import { useEffect } from 'react';

export function GoogleReviews() {
  useEffect(() => {
    if (!document.getElementById('sociablekit-google-reviews-script')) {
      const script = document.createElement('script');
      script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
      script.async = true;
      script.defer = true;
      script.id = 'sociablekit-google-reviews-script';
      document.body.appendChild(script);
    }
  }, []);

  return <div className="sk-ww-google-reviews" data-embed-id="187349"></div>;
}
