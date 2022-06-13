export class Quote {
  constructor(data) {
    this.content = data.content.rendered;
    this.author = data.title.rendered;
  }

  get Template() {
    return `
      <span class='quote'>${this.content}</span><span class='author'>- ${this.author}</span>`;
  }
}
