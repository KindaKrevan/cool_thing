import { ProxyState } from '../AppState.js';
import { imgApi } from './AxiosService.js';

class ImageService {
  async getImage() {
    const res = await imgApi.get();
    console.log(res.data)
    ProxyState.image = new Image(res.data);
    let image = res.data.urls.regular;
    document.body.style.backgroundImage = `url(${image})`;
    document.body.style.backgroundSize = `cover`;
  }
}

export const imageService = new ImageService();
