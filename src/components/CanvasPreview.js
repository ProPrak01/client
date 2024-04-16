import React, { useRef, useEffect } from 'react'

const CanvasPreview = ({base64Data}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const image = new Image();

    image.onload = () => {
      context.drawImage(image, 0, 0);
    };

    image.src = base64Data;
  }, [base64Data]);

  return <canvas className='preview' style={{border:'2px solid black',borderRadius:'25px'}} ref={canvasRef} width={300} height={200} />;
}

export default CanvasPreview