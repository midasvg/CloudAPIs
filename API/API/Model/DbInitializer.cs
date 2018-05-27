using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Model
{
    public class DbInitializer
    {
        public static void Initialize(LibraryContext context)
        {
            context.Database.EnsureCreated();

            if (!context.Movies.Any())
            {
                //Regisseurs toevoegen vooraleer de films zelf
                var spielberg = new Director()
                {
                    Movies = new List<Movie>(),
                    FirstName = "Steven",
                    LastName = "Spielberg",
                    Age = 71,
                };
                context.Directors.Add(spielberg);

                var jackson = new Director()
                {
                    Movies = new List<Movie>(),
                    FirstName = "Peter",
                    LastName = "Jackson",
                    Age = 56,
                };
                context.Directors.Add(jackson);

                var yates = new Director()
                {
                    Movies = new List<Movie>(),
                    FirstName = "David",
                    LastName = "Yates",
                    Age = 54,
                };
                context.Directors.Add(yates);

                var nolan = new Director()
                {
                    Movies = new List<Movie>(),
                    FirstName = "Christopher",
                    LastName = "Nolan",
                    Age = 47,
                };
                context.Directors.Add(nolan);


                //Films aanmaken


                var movie = new Movie()
                {
                    Title = "The Dark Knight",
                    Length = 152,
                    Genre = "Superhero",
                    IMDBscore = "9/10",
                    YearOfRelease = 2008,
                    Director = nolan
                };
                context.Movies.Add(movie);

                //Films toevoegen aan de collectie van boeken
                movie = new Movie()
                {
                    Title = "King Kong",
                    Length = 187,
                    Genre = "Action",
                    IMDBscore = "7.2/10",
                    YearOfRelease = 2005,
                    Director = jackson
                };
                context.Movies.Add(movie);

                movie = new Movie()
                {
                    Title = "Saving Private Ryan",
                    Length = 169,
                    Genre = "War",
                    IMDBscore = "8.6/10",
                    YearOfRelease = 1998,
                    Director = spielberg
                };
                context.Movies.Add(movie);

                movie = new Movie()
                {
                    Title = "Harry Potter and the Order of the Phoenix",
                    Length = 138,
                    Genre = "Adventure",
                    IMDBscore = "7.5/10",
                    YearOfRelease = 2007,
                    Director = yates
                };
                context.Movies.Add(movie);
            }
        }

    }
}
