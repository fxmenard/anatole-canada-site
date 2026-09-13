export async function onRequest(context) {
  const { request, next, env } = context;

  const expectedUser = env.SITE_USER || "family";
  const expectedPass = env.SITE_PASSWORD; // set in Pages project settings

  const auth = request.headers.get("Authorization");

  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(":");
      if (user === expectedUser && pass === expectedPass) {
        // Correct credentials: let the request through to the actual page
        return next();
      }
    }
  }

  // No credentials, or wrong ones: ask the browser to prompt for login
  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Anatole in Canada", charset="UTF-8"',
    },
  });
}
