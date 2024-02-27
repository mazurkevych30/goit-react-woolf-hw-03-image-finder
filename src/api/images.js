import axios from 'axios';

export const getImagesApi = async (q, page) => {
  const options = {
    params: {
      key: '40906325-3c4aeac244a0485d830cf7c70',
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page,
    },
  };
  const {
    data: { hits },
  } = await axios.get('https://pixabay.com/api/', options);
  return hits;
};
