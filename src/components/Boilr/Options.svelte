<script>
  import Dropdown from '../Dropdown.svelte';
  import Checkbox from '../Checkbox.svelte';
  import { _ } from 'svelte-i18n';

  export let config = [];
</script>

<style type="text/scss">
  @import '../../../public/assets/theme.scss';

  .project-option {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 24px;

    .title {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 900;
      background-color: $light-grey;
      padding: 12px;
      border-radius: 4px;
      width: 180px;
      margin-bottom: 12px;

      img {
        margin-left: 12px;
      }
    }

    .option-container {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      background-color: $light-grey;
      border-radius: 8px;
      padding: 0 24px 24px 24px;
      box-sizing: border-box;

      .option {
        margin-top: 24px;
        margin-right: 24px;

        &.break {
          width: 100%;
        }
      }
    }
  }
</style>

<div class="project-option">
  <div class="title">
    <span>{$_('option_title')}</span>
    <img src="assets/img/arrow-down.svg" alt="Arrow down" height="18" />
  </div>
  <div class="option-container">
    {#each config as option}
      <div class="option" class:break={option.type === 'break'}>
        {#if option.type === 'dropdown'}
          <Dropdown {option} />
        {/if}
        {#if option.type === 'checkbox'}
          <Checkbox {option} />
        {/if}
      </div>
    {/each}
  </div>
</div>
