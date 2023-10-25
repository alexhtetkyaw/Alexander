if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    const myWorkSection = document.getElementById('my-work-section');
    const offset = -35; 
    //calculate 
    const scrollPosition = myWorkSection.offsetTop + offset;

    window.scroll({
      top: scrollPosition,
      behavior: 'smooth'
    });
  });
}


if (document.getElementById('my-site-link')) {
  document.getElementById('my-site-link').addEventListener('click', () => {
    const externalSiteUrl = 'https://architecture.mit.edu/people/alexander-htet-kyaw';
    window.location.href = externalSiteUrl;
  });
}


if (document.getElementById('my-insta-link')) {
  document.getElementById('my-insta-link').addEventListener('click', () => {
    const externalSiteUrl = 'https://www.instagram.com/arch.htet/';
    window.location.href = externalSiteUrl;
  });
}


if (document.getElementById('my-final-link')) {
  document.getElementById('my-final-link').addEventListener('click', () => {
    const myWorkSection = document.getElementById('my-final-section');
    const offset = -35; 
    //calculate 
    const scrollPosition = myWorkSection.offsetTop + offset;

    window.scroll({
      top: scrollPosition,
      behavior: 'smooth'
    });
  });
}