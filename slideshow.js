const slides = [
    'friendphoto1.JPG',
    'friendphoto2.jpg',
    'friendphoto3.JPG',
    'friendphoto4.jpg',
    'friendphoto5.png',
    'friendphoto6.jpg',
    'friendphoto7.JPG'
  ];
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % slides.length;
    document.getElementById('slide').src = slides[idx];
  }, 750);
  