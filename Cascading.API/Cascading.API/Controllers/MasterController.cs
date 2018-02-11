using Cascading.API.Models;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace Cascading.API.Controllers
{
    [RoutePrefix("api/master")]
    public class MasterController : ApiController
    {
        [HttpGet, Route("colt")]
        public IHttpActionResult GetCountryList()
        {
            try
            {
                var countryList = new List<Country> {
                    new Country { Label = "India", Value = 1 },
                    new Country { Label = "USA", Value = 2 },
                    new Country { Label = "Australia", Value = 3 },
                    new Country { Label = "Brazil", Value = 4 }
                };
                return Ok(countryList);
            }
            catch (Exception)
            {
                return NotFound();
            }
        }

        [HttpGet, Route("cilt")]
        public IHttpActionResult GetCityList()
        {
            try
            {
                var cityList = new List<City> {
                    new City { Label = "Namakkal", Value = 1, Id = 1 },                   
                    new City { Label = "Chennai", Value = 2, Id = 1 },                   
                    new City { Label = "Madurai", Value = 3, Id = 1 },                   
                    new City { Label = "Salem", Value = 4, Id = 1 },                   
                    new City { Label = "New York", Value = 5, Id = 2 },                   
                    new City { Label = "Washington D.C", Value = 6, Id = 2 },                   
                    new City { Label = "Chicago", Value = 7, Id = 2 },                   
                    new City { Label = "San Francisco", Value = 8, Id = 2 },
                    new City { Label = "Sydney", Value = 9, Id = 3 },
                    new City { Label = "Melbourne", Value = 10, Id = 3 },
                    new City { Label = "Adelaide", Value = 11, Id = 3 },
                    new City { Label = "Perth", Value = 12, Id = 3 },
                };
                return Ok(cityList);
            }
            catch (Exception)
            {
                return NotFound();
            }
        }
    }
}
