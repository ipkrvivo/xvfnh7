export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/8f4b0d96-6306-4b46-a22e-9321a095da2a')) {
      url.hostname = 'ddvlst.jjyut.repl.co'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
