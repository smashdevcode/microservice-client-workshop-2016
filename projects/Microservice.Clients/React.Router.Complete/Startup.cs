using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Spa.Middleware;

namespace React.Router.Complete
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app)
        {
            app.UseSpaMode();
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
