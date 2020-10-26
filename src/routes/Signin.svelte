<script>
  import Btn from '../components/Btn.svelte';
  import { fade } from 'svelte/transition';
  import Api from '../services/api';
  import { _ } from 'svelte-i18n';

  let onCLickSignin = () => {
    window.location.href = `${Api.baseURL}/auth/github`;
  };
</script>

<style type="text/scss">
  .signin {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
  }
</style>

<div class="signin" in:fade>
  <Btn bgColor="#2E2E2E" icon="assets/img/github.png" on:click={onCLickSignin}>
    {$_('github_signin')}
  </Btn>
</div>
