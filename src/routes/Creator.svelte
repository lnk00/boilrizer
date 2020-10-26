<script>
  import Api from '../services/api';
  import { push } from 'svelte-spa-router';
  import { _ } from 'svelte-i18n';
  import { fade } from 'svelte/transition';
  import { selectedBoilr, notifs } from '../store';
  import Boilr from '../components/Boilr.svelte';
  import Notif from '../components/Notif.svelte';

  let getBoilrs = async () => {
    const res = await Api.getPopularBoilr();
    return res.data.payload;
  };

  let onClickLogo = () => {
    push('/');
  };

  let onClickBoilr = (boilr) => {
    selectedBoilr.set(boilr);
  };
</script>

<style type="text/scss">
  @import '../../public/assets/theme.scss';
  .creator {
    display: flex;
    width: 100vw;
    height: 100vh;

    .sidebar {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 250px;
      padding: 0 48px;

      .topspace {
        display: flex;
        align-items: center;
        height: 120px;

        img {
          cursor: pointer;
          margin: 0 12px 0 0;
        }

        h2 {
          cursor: pointer;
          font-size: 35px;
          font-weight: 900;
          font-family: 'Heebo';
        }
      }

      .boilr-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        width: 100%;
        padding: 48px 0;

        .boilr {
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          margin: 12px 0;
          width: 100%;
          height: 60px;
          border-radius: 4px;

          &:hover,
          &.selected {
            .background {
              width: 100%;
            }
          }

          .background {
            position: absolute;
            height: 100%;
            width: 0%;
            top: 0;
            left: 0;
            border-radius: 4px;
            background-color: $light-grey;
            z-index: -1;
            transition: 0.3s;
          }

          .img-container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 60px;
            background-color: $light-grey;
            border-radius: 4px;
            margin-right: 12px;

            img {
              height: 35px;
              width: 35px;
            }
          }

          .title {
            font-size: 20px;
            font-weight: 600;
          }
        }
      }
    }

    .content {
      height: 100%;
      width: 100%;
      padding: 0 48px 0 0;

      .top-space {
        height: 120px;
        width: 100%;
      }
    }
  }

  .notif-container {
    position: absolute;
    top: 0;
    right: 0;
    padding: 24px;
  }
</style>

{#await getBoilrs()}
  <div />
{:then boilrs}
  <div class="creator" in:fade>
    <div class="sidebar">
      <div class="topspace">
        <img
          src="assets/img/logo.png"
          height="40"
          alt="logo"
          on:click={onClickLogo} />
        <h2 on:click={onClickLogo}>{$_('creator')}</h2>
      </div>
      <div class="boilr-list">
        {#each boilrs as boilr}
          <div
            class="boilr"
            class:selected={$selectedBoilr.title === boilr.title}
            on:click={onClickBoilr.bind(this, boilr)}>
            <div class="background" />
            <div class="img-container">
              <img src="assets/img/{boilr.img}" alt="boilr logo" />
            </div>
            <span class="title">{boilr.title}</span>
          </div>
        {/each}
      </div>
    </div>
    <div class="content">
      <div class="top-space" />
      <Boilr />
    </div>
  </div>
{/await}

<div class="notif-container">
  {#each $notifs as item}
    <Notif {item} />
  {/each}
</div>
