<script>
  export let option = {};

  let isTooltipActive = false;

  let onCheckboxClick = () => {
    option.item = !option.item;
  };
</script>

<style type="text/scss">
  @import '../../public/assets/theme.scss';
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

  .box {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    height: 49px;
    width: 88px;
    background-color: $white;
    border-radius: 4px;
    box-shadow: $shadow;
    margin-top: 12px;
    padding: 0 6px;

    &.active {
      .inside-box {
        margin-left: 38px;
        background-color: $cyan;
      }
    }

    .inside-box {
      height: 38px;
      width: 38px;
      border-radius: 4px;
      background-color: $light-grey;
      transition: all 0.3s;
    }
  }
</style>

<div class="checkbox">
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
  <div class="box" on:click={onCheckboxClick} class:active={option.item}>
    <div class="inside-box" />
  </div>
</div>
