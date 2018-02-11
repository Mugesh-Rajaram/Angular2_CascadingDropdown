using System.Web.Http;
using System.Web.Http.Cors;

namespace Cascading.API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //Enabled cross domain access
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);

            // Web API configuration and services

            // Web API enabling cors globally

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
