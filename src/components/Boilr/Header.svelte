<script>
  export let config = {};
</script>

<style type="text/scss">
  @import '../../../public/assets/theme.scss';

  .header {
    display: flex;
    flex-direction: column;
    align-items: self-start;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    padding: 24px;
    background-color: $light-grey;
    border-radius: 8px;

    .project-title {
      margin-bottom: 24px;
      width: 100%;

      input {
        height: 52px;
        border: none;
        border-radius: 4px;
        box-sizing: border-box;
        width: 100%;
        font-size: 32px;
        padding-left: 12px;
        font-family: 'heebo';
        font-weight: 900;
        color: $text-color;

        &:focus {
          border: none;
          outline: none;
        }

        &::placeholder {
          color: #6f869c;
        }
      }
    }

    .presentation {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-left: -48px;
      width: calc(100% + 96px);
      padding: 24px;
      border-radius: 8px;
      box-sizing: border-box;

      .title {
        font-family: 'heebo';
        font-size: 32px;
        font-weight: 600;
        color: $white;
        margin-bottom: 8px;
      }

      .badge-container {
        display: flex;

        .badge {
          padding: 6px 8px;
          background-color: $light-grey;
          margin-right: 12px;
          border-radius: 4px;
          font-size: 12px;
        }
      }
    }
  }
</style>

<div class="header">
  <div class="project-title">
    <input type="text" placeholder="Project Name" bind:value={config.title} />
  </div>
  <div class="presentation" style="background-color: {config.color}">
    <span class="title">{config.name}</span>
    <div class="badge-container">
      {#each config.badges as badge}
        <div class="badge">{badge}</div>
      {/each}
    </div>
  </div>
</div>
