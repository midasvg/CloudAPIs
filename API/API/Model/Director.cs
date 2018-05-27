using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace API.Model
{
    public class Director
    {
        public int ID { get; set; }
        public int Age { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        [JsonIgnore]
        public ICollection<Movie> Movies { get; set; }
    }
}
