<script>
  import { fly } from 'svelte/transition';
  import { notifs } from '../store';

  export let item;

  const url = item.url ? `git clone ${item.url}` : null;

  let closeNotif = () => {
    notifs.remove(item.uuid);
  };

  let copyUrl = () => {
    navigator.clipboard.writeText(url).then(() => {
      console.log('COPIED!');
    })
  }
</script>

<style type="text/scss">
  @import '../../public/assets/theme.scss';

  .notif {
    position: relative;
    padding: 12px;
    margin-bottom: 24px;
    box-shadow: $shadow;
    border-radius: 4px;
    background-color: $white;
    min-width: 340px;

    .close {
      position: absolute;
      right: 12px;
      cursor: pointer;
    }

    .first-row {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-family: 'Heebo';
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 12px;

      img {
        margin-right: 12px;
      }
    }

    .second-row {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 12px;

      .loading {
        margin-right: 12px;
        margin-left: 6px;
        animation: rotate 1s linear infinite;
      }

      .finished {
        margin-right: 12px;
        margin-left: 6px;
      }
    }

    .third-row {
      .copy-container {
        display: flex;
        cursor: pointer;

        .url {
          background-color: $light-grey;
          padding: 8px;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }

        .copy {
          display: flex;
          align-items: center;
          justify-content: center;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          background-color: $blue;
          width: 35px;
        }
      }
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

<div class="notif" transition:fly={{ x: 350 }}>
  <img
    class="close"
    src="assets/img/close.svg"
    alt="close icon"
    height="16"
    on:click={closeNotif} />
  <div class="first-row">
    <img src="assets/img/{item.type}.svg" alt="logo icon" height="32" />
    <span class="title">{item.title}</span>
  </div>
  <div class="second-row">
    {#if item.state === 'waiting'}
      <img
        class="loading"
        src="assets/img/loading.svg"
        alt="loading icon"
        height="16px" />
    {:else if item.state === 'finished'}
      <img
        class="finished"
        src="assets/img/shuttle.svg"
        alt="launch icon"
        height="16px" />
    {/if}
    <span>{item.desc}</span>
  </div>
  {#if item.state === 'finished' && url}
  <div class="third-row">
    <div class="copy-container" on:click={copyUrl}>
      <div class="url">{url}</div>
      <div class="copy">
        <img src="assets/img/copy.svg" alt="cpoy button" height="18">
      </div>
    </div>
  </div>
  {/if}
</div>
