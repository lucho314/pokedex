import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class FetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    try {
      const data = await fetch(url).then((res) => res.json());

      return data as T;
    } catch (error) {
      throw new Error('This is an error - check logs');
    }
  }
}
