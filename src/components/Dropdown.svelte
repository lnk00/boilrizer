<script>
  export let option = {};

  let isActive = false;
  let isTooltipActive = false;
  $: selectedItem = getActive();

  let getActive = () => {
    if (option.items[0]) {
      let item = option.items.filter((i) => i.active === true);
      return item[0];
    } else return '';
  };

  let onClickItem = (item) => {
    isActive = !isActive;
    option.items.forEach((i) => {
      if (i.label === item.label) {
        i.active = true;
        selectedItem = i;
      } else i.active = false;
    });
  };
</script>

<style type="text/scss">
  @import '../../public/assets/theme.scss';

  .dropdown {
    position: relative;
    width: 200px;
    text-align: start;

    .label {
      position: relative;
      display: flex;
      align-items: center;
      font-weight: 900;

      img {
        cursor: pointer;
        margin-left: 6px;
      }

      .tooltip-container {
        position: relative;
        z-index: 10;

        .tooltip {
          position: absolute;
          left: 12px;
          top: -16px;
          width: max-content;
          font-weight: 400;
          padding: 6px;
          background-color: $white;
          border-radius: 4px;
        }
      }
    }

    .btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      background-color: $white;
      font-size: 18px;
      font-style: 'heebo';
      padding: 12px;
      margin-top: 12px;
      border-radius: 4px;
      box-shadow: $shadow;

      img {
        margin-left: auto;
      }
    }

    .list {
      z-index: 20;
      box-sizing: border-box;
      width: 100%;
      max-height: 200px;
      margin-top: 12px;
      border-radius: 4px;
      position: absolute;
      background-color: $white;
      box-shadow: $shadow;
      padding: 6px;

      .item {
        cursor: pointer;
        padding: 6px 6px;
        border-radius: 4px;

        &.active {
          background-color: $light-grey;
        }

        &:hover {
          background-color: $light-grey;
        }
      }
    }
  }
</style>

<div class="dropdown">
  <div class="label">
    <span>{option.label}</span>
    <img
      src="assets/img/info-button.svg"
      alt="Info button"
      height="14"
      on:mouseenter={() => (isTooltipActive = true)}
      on:mouseleave={() => (isTooltipActive = false)} />
    <div class="tooltip-container">
      {#if isTooltipActive}<span class="tooltip">{option.tooltip}</span>{/if}
    </div>
  </div>
  <div class="btn" on:click={() => (isActive = !isActive)}>
    <span>{selectedItem.label}</span>
    <img src="assets/img/arrow-down.svg" alt="Arrow button" height="18" />
  </div>
  {#if isActive}
    <div class="list" v-if="isActive">
      {#each option.items as item}
        <div
          class="item"
          class:active={item.active}
          on:click={onClickItem.bind(this, item)}>
          <span>{item.label}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>
