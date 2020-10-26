<script>
  import { fly } from 'svelte/transition';
  import { selectedBoilr } from '../store';
  import Api from '../services/api';
  import Header from '../components/Boilr/Header.svelte';
  import Options from '../components/Boilr/Options.svelte';
  import Btn from '../components/Btn.svelte';
  import FileDownload from 'js-file-download';
  import { _ } from 'svelte-i18n';

  let getConfig = async () => {
    const res = await Api.getConfig($selectedBoilr.title);
    return res.data.payload;
  };

  let download = (config) => {
    Api.createAndDownloadAngularProject(config).then((res) => {
      FileDownload(res.data, `${config.header.title}.zip`);
    });
  };

  let upload = (config) => {
    Api.createAndUploadAngularProject(config).then(() => {});
  };
</script>

<style type="text/scss">
  .project-page {
    display: flex;
    flex-direction: column;
    width: 100%;

    &.container {
      position: relative;
      max-width: 1280px;
      margin: auto;

      .btn-container {
        display: flex;
        margin-top: 24px;
      }
    }
  }
</style>

{#key $selectedBoilr}
  {#await getConfig()}
    <div />
  {:then config}
    <div
      class="project-page container"
      in:fly={{ delay: 500, x: window.innerWidth }}
      out:fly={{ x: window.innerWidth }}>
      <Header config={config.header} />
      <Options config={config.options} />
      <div class="btn-container">
        <Btn margin="0 12px 0 0" on:click={download.bind(this, config)}>
          {$_('download')}
        </Btn>
        <Btn on:click={upload.bind(this, config)}>{$_('upload')}</Btn>
      </div>
    </div>
  {/await}
{/key}
