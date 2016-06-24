using System;
using Microsoft.AspNet.Builder;

namespace Spa.Middleware
{
    public static class AppBuilderExtensions
    {
        public static IApplicationBuilder UseSpaMode(this IApplicationBuilder app, SpaMiddlewareOptions options = null)
        {
            if (app == null)
                throw new ArgumentNullException(nameof(app));
            if (options == null)
                options = SpaMiddlewareOptions.Default;

            return app.Use(next => new SpaMiddleware(next, options).Invoke);
        }
    }
}