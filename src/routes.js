import Home from './routes/Home.svelte';
import Signin from './routes/Signin.svelte';
import Creator from './routes/Creator.svelte';
import { wrap } from 'svelte-spa-router/wrap'

function parseQuery(queryString) {
  let query = {};
  let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

export const routes = {
  '/': Home,
  '/signin': Signin,
  '/creator': wrap({
    component: Creator,
    conditions: [
      (details) => {
        let qs = parseQuery(details.querystring);
        if (qs.s) localStorage.setItem('secret', qs.s)

        if (localStorage.getItem('secret')) {
          return true;
        }

        return false
      }
    ]
  })
};