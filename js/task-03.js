const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgEl = document.querySelector('.gallery');
imgEl.style.listStyle = 'none';


const galleryEl = images.map(({ url, alt }) => 
  `<li class = 'item'> <img src = '${url}' alt = '${alt}' width="300" height="200" style="border-radius: 10px; margin: 10px; object-fit: cover; box-shadow: 8px 8px 8px 3px rgba(0, 0, 0, 0.2)"> </li>`).join('');

imgEl.insertAdjacentHTML('beforeend', galleryEl);