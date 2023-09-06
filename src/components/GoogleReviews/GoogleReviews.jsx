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
  }, []);

  return <div className="sk-ww-google-reviews" data-embed-id="187349"></div>;
}
