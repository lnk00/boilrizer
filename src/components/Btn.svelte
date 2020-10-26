<script>
  export let bgColor = '#2064d1';
  export let margin = '0 0 0 0';
  export let icon = null;
</script>

<style type="text/scss">
  @import '../../public/assets/theme.scss';

  .btn {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: 16px;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 600;
    color: $white;

    &:hover {
      background-color: $dark-blue;
    }

    .icon {
      height: 25px;
      margin-right: 12px;
    }
  }
</style>

<div class="btn" on:click style="background-color:{bgColor}; margin:{margin}">
  {#if icon}<img class="icon" src={icon} alt="Button icon" />{/if}
  <span>
    <slot />
  </span>
</div>
