import { Injectable } from '@angular/core';
import * as marked from 'marked';

@Injectable({
  providedIn: 'root',
})
export class MarkdownParserService {
  private md: any;

  constructor() {
    this.md = marked;
    this.md.setOptions({
      gfm: true,
      breaks: true,
    });
  }

  convert(markdown: string) {
    return this.md.parse(markdown);
  }
}
