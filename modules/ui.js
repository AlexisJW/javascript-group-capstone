import populate from './fetchApiTv.js';
import getLikes from './getLikes.js';

const homePage = () => {
  populate();
  getLikes();
};

export default homePage;