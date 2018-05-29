using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Model
{
    public class Movie
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public int Length { get; set; }
        public string Genre { get; set; }
        public string IMDBscore { get; set; }
        public int YearOfRelease { get; set; }
        public string Poster {get; set;}
        public Director Director { get; set; }

    }
}
