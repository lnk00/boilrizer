<script>
  import { fly } from 'svelte/transition';
  import { notifs } from '../store';

  export let item;

  let closeNotif = () => {
    notifs.remove(item.uuid);
  };
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
    width: 340px;

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
</div>
