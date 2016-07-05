using Microsoft.AspNetCore.Http;

namespace Spa.Middleware
{
    public class SpaMiddlewareOptions
    {
        public PathString EntryPath { get; set; }

        public bool Html5Mode
        {
            get
            {
                return EntryPath.HasValue;
            }
        }

        public static SpaMiddlewareOptions Default
        {
            get
            {
                return defaults;
            }
        }

        private static SpaMiddlewareOptions defaults = new SpaMiddlewareOptions
        {
            EntryPath = new PathString("/index.html")
        };
    }
}
