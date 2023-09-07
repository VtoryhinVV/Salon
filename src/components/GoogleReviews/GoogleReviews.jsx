import { useEffect } from 'react';

export function GoogleReviews() {
  useEffect(() => {
    // Функция для загрузки Google отзывов
    const loadGoogleReviews = () => {
      const script = document.createElement('script');
      script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
      script.async = true;
      script.defer = true;
      script.id = 'sociablekit-google-reviews-script';
      document.body.appendChild(script);
    };

    loadGoogleReviews();
    return () => {
      const script = document.getElementById(
        'sociablekit-google-reviews-script'
      );
      if (script) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div className="sk-ww-google-reviews" data-embed-id="191000"></div>;
}
