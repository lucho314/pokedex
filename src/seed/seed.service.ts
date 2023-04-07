import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10',
    );
    const pokemons = data.results.map(({ name, url }) => {
      const segment = url.split('/');
      const no = segment[segment.length - 2];
      return { name, no };
    });
    return pokemons;
  }
}
