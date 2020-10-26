<script>
  import { fly } from 'svelte/transition';

  export let item;
</script>

<style type="text/scss">
  @import '../../public/assets/theme.scss';

  .notif {
    padding: 12px;
    margin-bottom: 24px;
    box-shadow: $shadow;
    border-radius: 4px;
    background-color: $white;
    width: 340px;

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
    }
  }
</style>

<div class="notif" transition:fly={{ x: 350 }}>
  <div class="first-row">
    <img src="assets/img/{item.type}.svg" alt="logo icon" height="32" />
    <span class="title">{item.title}</span>
  </div>
  <div class="second-row"><span>{item.desc}</span></div>
</div>
