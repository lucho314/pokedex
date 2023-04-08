import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FetchAdapter } from 'src/common/adapters/fetch.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private http: FetchAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({}).exec();

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?offset=0&limit=650',
    );
    const pokemons = data.results.map(({ name, url }) => {
      const segment = url.split('/');
      const no = +segment[segment.length - 2];
      return { no, name };
    });
    await this.pokemonModel.insertMany(pokemons);

    return 'Pokemons inserted';
  }
}
