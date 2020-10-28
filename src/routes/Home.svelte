<script>
  import { push } from 'svelte-spa-router';
  import { fade } from 'svelte/transition';
  import { _ } from 'svelte-i18n';
  import Btn from '../components/Btn.svelte';
  import Card from '../components/Card.svelte';
  import { logo, pattern, illustration } from '../services/img';
  import Api from '../services/api';

  let getPopular = async () => {
    const res = await Api.getPopularBoilr();
    return res.data.payload;
  };

  let onClickDiscover = () => console.log('Discover !');
  let onClickCreate = () => console.log('Create !');
  let onClickLogin = () => push('/signin');
  let onClickLogout = () => {
    if (localStorage.getItem('secret')) localStorage.removeItem('secret');
    push('/signin');
  };
</script>

<style type="text/scss">
  @import '../../public/assets/theme.scss';

  .container {
    position: relative;
    max-width: 1280px;
    margin: auto;
  }

  .navbar {
    height: 90px;
    background-color: $white;

    .container {
      display: flex;
      align-items: center;
      height: 100%;
      max-width: 1280px;
      padding: 0px 20px;
      margin: auto;
      background-color: $white;
      border-radius: 20px;

      h1 {
        font-family: 'Heebo';
        font-size: 42px;
        margin: 6px 0 0 12px;
        color: $text-color;
        margin-right: auto;
      }
    }
  }

  .presentation {
    position: relative;
    background-color: $light-grey;

    .bg-img {
      position: absolute;
      top: 0;
      left: 0;
      height: 80%;
      opacity: 0.2;

      @media (max-width: 1280px) {
        height: 40%;
      }
    }

    .container {
      display: flex;
      padding: 120px 0;
      align-items: center;

      @media (max-width: 1280px) {
        flex-direction: column;
      }
    }

    .left {
      width: 100%;
      text-align: start;

      @media (max-width: 1280px) {
        width: 70%;
        text-align: center;
      }

      h2 {
        font-size: 40px;
        font-weight: 900;
        font-family: 'Heebo';
        margin: 0;
      }

      p {
        font-size: 22px;
        font-weight: 300;
        margin-bottom: 28px;
        line-height: 32px;
      }
    }

    .right {
      width: 100%;
      text-align: end;

      @media (max-width: 1280px) {
        display: none;
      }

      .illustration {
        height: 600px;
      }
    }
  }

  .discover {
    position: relative;
    text-align: center;
    .container {
      padding: 60px 0;

      h3 {
        font-size: 34px;
        font-weight: 900;
        font-family: 'Heebo';
        margin: 0 0 48px;
      }

      .cards {
        display: flex;
        justify-content: space-between;
        margin-bottom: 48px;

        @media (max-width: 924px) {
          justify-content: space-evenly;

          :global(.card):nth-last-child(2) {
            display: none;
          }
        }

        @media (max-width: 1280px) {
          justify-content: space-evenly;

          :global(.card):last-child {
            display: none;
          }
        }
      }
    }
  }
</style>

{#await getPopular()}
  <div />
{:then data}
  <div class="navbar" in:fade>
    <div class="container">
      <img src={logo.src} width={logo.width} alt={logo.alt} />
      <h1>{$_('brand_name')}</h1>
      <Btn margin="0 12px 0 0 " on:click={onClickLogin}>{$_('login')}</Btn>
      <Btn on:click={onClickLogout}>{$_('logout')}</Btn>
    </div>
  </div>
  <div class="presentation" in:fade>
    <img class="bg-img" src={pattern.src} alt={pattern.alt} />
    <div class="container">
      <div class="left">
        <h2>{$_('motto')}</h2>
        <p>{$_('presentation')}</p>
        <Btn on:click={onClickDiscover}>{$_('discover_btn')}</Btn>
        <Btn on:click={onClickCreate}>{$_('create_btn')}</Btn>
      </div>
      <div class="right">
        <img
          class="illustration"
          src={illustration.src}
          alt={illustration.alt} />
      </div>
    </div>
  </div>
  <div class="discover" in:fade>
    <div class="container">
      <h3>{$_('popular_title')}</h3>
      <div class="cards">
        {#each data as boilr, i}
          <Card class="card" infos={boilr} />
        {/each}
      </div>
      <Btn>{$_('browse_more_btn')}</Btn>
    </div>
  </div>
{/await}
