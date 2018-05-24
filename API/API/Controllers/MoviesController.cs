using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Produces("application/json")]
    [Route("api/Movies")]
    public class MoviesController : Controller
    {
        private readonly LibraryContext context;
        public MoviesController(LibraryContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Movie> GetMovies(string Genre, string Title, int Length, string Director, string sorting, int length, string direction = "ascending")
        {
            IQueryable<Movie> query = context.Movies;

            if (!string.IsNullOrWhiteSpace(Genre))
                query = query.Where(n => n.Genre == Genre);
            if (!string.IsNullOrWhiteSpace(Title))
                query = query.Where(n => n.Title == Title);
            if (!string.IsNullOrWhiteSpace(sorting))
            {
                switch (sorting)
                {
                    case "Title":
                        if (direction == "ascending")
                            query = query.OrderBy(n => n.Title);
                        else if (direction == "descending")
                            query = query.OrderByDescending(n => n.Title);
                        break;
                    case "Length":
                        if (direction == "asc")
                            query = query.OrderBy(n => n.Length);
                        else if (direction == "desc")
                            query = query.OrderByDescending(n => n.Length);
                        break;
                }
            }
            query = query.Include(n => n.Actor);

            query = query.Take(length);
            return query.ToList();
        }

        [HttpPost]
        public IActionResult NewMovie([FromBody] Movie newMovie)
        {
            context.Movies.Add(newMovie);
            context.SaveChanges();
            return Created("", newMovie);
        }

        [HttpPut]
        public IActionResult UpdateMovie([FromBody] Movie updatedMovie)
        {
            var orgMovie = context.Movies.Find(updatedMovie.ID);
            if (orgMovie == null)
                return NotFound();
            orgMovie.Title = updatedMovie.Title;
            orgMovie.Genre = updatedMovie.Genre;
            orgMovie.Director = updatedMovie.Director;
            orgMovie.Length = updatedMovie.Length;
            orgMovie.IMDBscore = updatedMovie.IMDBscore;
            orgMovie.YearOfRelease = updatedMovie.YearOfRelease;
            orgMovie.Actor = updatedMovie.Actor;
            context.SaveChanges();
            return Ok(orgMovie);
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetMovie(int id)
        {
            var movie = context.Movies.Include(n => n.Actor).SingleOrDefault(n => n.ID == id);
            if (movie == null)
                return NotFound();
            return Ok(movie);
        }

        [Route("{id}/actor")]
        [HttpGet]
        public IActionResult GetActorFromMovie(int id)
        {
            var movie = context.Movies.Include(n => n.Actor).SingleOrDefault(n => n.ID == id);
            if (movie == null)
                return NotFound();
            return Ok(movie.Actor);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteMovie(int id)
        {
            var movie = context.Movies.Find(id);
            if (movie == null)
                return NotFound();

            context.Movies.Remove(movie);
            context.SaveChanges();
            return NoContent();
        }
    }
}