<script>
  import Router from 'svelte-spa-router';
  import { routes } from './routes';
  import { i18nInit } from './services/i18n';
  import { push } from 'svelte-spa-router';

  i18nInit();

  let handleConditionsFailed = (event) => {
    push('/signin');
  };
</script>

<style type="text/scss">
</style>

<main>
  <Router {routes} on:conditionsFailed={handleConditionsFailed} />
</main>
