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
      src="https://snapwidget.com/embed/1042355"
      className="snapwidget-widget"
      scrolling="no"
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        width: '100%',
      }}
    ></iframe>
  );
}
