import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const katakana =
      'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';

    const alphabet = katakana + latin + nums;
    const fontSize = 16;

    const calculateCanvasSize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const columns = Math.ceil(window.innerWidth / fontSize);
    const rainDrops = Array.from({ length: columns }, () =>
      Math.floor(Math.random() * window.innerHeight / fontSize)
    );

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));

        // Change color for all characters
        let textColor = 'rgba(255, 255, 255, 1)'; // White
        if (text) {
          textColor = 'rgba(255, 50, 50, 1)'; // Intensified Red
        }

        context.fillStyle = textColor;
        context.font = fontSize + 'px monospace';
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const handleResize = () => {
      calculateCanvasSize();
      draw();
    };

    window.addEventListener('resize', handleResize);
    calculateCanvasSize();

    const intervalId = setInterval(draw, 30);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <canvas ref={canvasRef} className="matrix-background" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default MatrixBackground;
