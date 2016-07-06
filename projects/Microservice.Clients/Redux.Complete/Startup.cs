using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using Spa.Middleware;

namespace Redux.Complete
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseSpaMode();
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
