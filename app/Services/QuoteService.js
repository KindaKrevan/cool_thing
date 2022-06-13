import { ProxyState } from '../AppState.js';
import { Quote } from '../Models/Quote.js';
import { quoteApi } from './AxiosService.js';

class QuoteService {
  async getQuotes() {
    const res = await quoteApi.get();
    let length = res.data.length
    let randomNum = Math.floor(Math.random() * length)
    let quote = res.data[randomNum]
    console.log(res.data);
    ProxyState.quotes = new Quote(quote);
  }
}

export const quoteService = new QuoteService();
