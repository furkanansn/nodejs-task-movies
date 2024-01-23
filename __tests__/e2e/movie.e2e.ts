import axios from "axios";
import configTest from "../config";

const movieSlug = "deadpool";
const movieName = "Deadpool";
const movieGenre = "adventure";
const api = axios.create({
  baseURL: `${configTest.root_url}/movies`,
});

describe("Movies by Get One with Slug, Name, Genre", () => {
  describe("Get One", () => {
    it(`Should match with ${movieSlug}`, async () => {
      const { data } = await api.get(`/${movieSlug}`);

      expect(data.slug).toEqual(movieSlug);
    });
  });

  describe("By Name", () => {
    it(`Should match with ${movieName}`, async () => {
      const { data } = await api.get("", {
        params: { name: movieName },
      });

      expect(data.movies[0][0].name).toEqual(movieName);
    });
  });

  describe("By Genre", () => {
    it(`Should match with ${movieGenre}`, async () => {
      const { data } = await api.get("", {
        params: { genre: movieGenre },
      });

      for (const movie of data.movies[0]) {
        expect(movie.genres).toContain(movieGenre);
      }
    });
  });
});
