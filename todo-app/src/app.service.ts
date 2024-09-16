import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <h1>Hello World!</h1>
      <a href="/todos" target="_blank">Visiter Example</a>
    `;
  }
}
