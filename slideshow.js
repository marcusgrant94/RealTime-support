const slides = [
    'friendphoto1.JPG',
    'friendphoto2.jpg',
    'friendphoto3.JPG'
  ];
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % slides.length;
    document.getElementById('slide').src = slides[idx];
  }, 750);
  