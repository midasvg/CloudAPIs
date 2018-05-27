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
    [Route("api/Directors")]
    public class DirectorsController : Controller
    {
        private readonly LibraryContext context;
        public DirectorsController(LibraryContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Director> GetDirectors()
        {
            return context.Directors.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetDirector(int id)
        {
            var Director = context.Directors.Find(id);
            if (Director == null)
                return NotFound();
            return Ok(Director);
        }

        [Route("{id}/movies")]
        [HttpGet]
        public IActionResult GetMoviesForDirector(int id)
        {
            var Director = context.Directors
                    .Include(d => d.Movies)
                    .SingleOrDefault(d => d.ID == id);

            if (Director == null)
                return NotFound();

            return Ok(Director.Movies);
        }

        [HttpPost]
        public IActionResult CreateDirector([FromBody] Director newDirector)
        {
            context.Directors.Add(newDirector);
            context.SaveChanges();
            return Created("", newDirector);
        }

        [HttpPut]
        public IActionResult UpdateDirector([FromBody] Director updateDirector)
        {
            var originalDirector = context.Directors.Find(updateDirector.ID);
            if (originalDirector == null)
                return NotFound();

            originalDirector.LastName = updateDirector.LastName;
            originalDirector.FirstName = updateDirector.FirstName;

            context.SaveChanges();
            return Ok(originalDirector);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteDirector(int id)
        {
            var Director = context.Directors.Find(id);
            if(Director == null)
            {
                return NotFound();
            }

            context.Directors.Remove(Director);
            context.SaveChanges();

            return NoContent();
        }
    }
}