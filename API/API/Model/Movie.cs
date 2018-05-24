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
        public string Director { get; set; }
        public double IMDBscore { get; set; }
        public int YearOfRelease { get; set; }

        //Could go on and make a director Model/Controller 
        //to go further in-depth.
    }
}
