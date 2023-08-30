import { useEffect } from 'react';

export function EmbedSocialWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'EmbedSocialHashtagScript';
    script.src = 'https://embedsocial.com/cdn/ht.js';
    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
      document.getElementById('EmbedSocialHashtagScript').remove();
    };
  }, []);

  return (
    <div
      className="embedsocial-hashtag"
      data-ref="81193454fe718372e8e98222706bd1e210a5c87e"
    >
      <a
        className="feed-powered-by-es feed-powered-by-es-feed-new"
        href="https://embedsocial.com/social-media-aggregator/"
        target="_blank"
        rel="noreferrer"
        title="Widget by EmbedSocial"
      >
        Widget by EmbedSocial<span>→</span>
      </a>
      {/* You can add additional content or styling here */}
    </div>
  );
}
