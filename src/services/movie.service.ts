// Models
import { GetMovie, GetOneMovie } from "../dao/movie.dao";
import { Movie } from "../models/Movie";

// Utility
import { dataSource } from "../config/app-data-source";
import { MovieException } from "../exceptions/movie.exception";

class MovieService {
  async getOne(filter: GetOneMovie): Promise<Movie> {
    const query = dataSource.getRepository(Movie).createQueryBuilder("Movie");
    if (filter.slug) {
      query.andWhere("Movie.slug = :slug", {
        slug: filter.slug,
      });
    }
    const movie = await query.getOne();
    if (!movie) {
      throw new MovieException("NOT_FOUND");
    }

    return movie;
  }
  async get(filter: GetMovie): Promise<[Movie[], number]> {
    const query = dataSource.getRepository(Movie).createQueryBuilder("Movie");
    if (filter.id) {
      query.andWhere("Movie.id = :id", {
        id: filter.id,
      });
    }

    if (filter.name) {
      query.andWhere("Movie.name LIKE :name", {
        name: `%${filter.name}%`,
      });
    }

    if (filter.genre) {
      query.andWhere("Movie.genres LIKE :genre", {
        genre: `%${filter.genre}%`,
      });
    }

    if (filter.limit) {
      query.take(filter.limit);
    }

    if (filter.offset) {
      query.skip(filter.offset);
    }

    return await query.getManyAndCount();
  }
}

export default new MovieService();
