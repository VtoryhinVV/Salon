import { useEffect } from 'react';

export function SocialWidget() {
  useEffect(() => {
    const handleResize = event => {
      const { height } = event.data;
      if (height) {
        const iframe = document.querySelector('.snapwidget-widget');
        iframe.style.height = height + 'px';
      }
    };

    window.addEventListener('message', handleResize);

    return () => {
      window.removeEventListener('message', handleResize);
    };
  }, []);

  return (
    <iframe
      src="https://snapwidget.com/embed/1042632"
      className="snapwidget-widget"
      frameBorder="0"
      scrolling="no"
      title="instagram"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        overflow: 'hidden',
        // width: '765px',
        width: '100%',
        // height: '510px',
        margin: '0 auto 40px',
        display: 'block',
      }}
    ></iframe>
  );
}
