<script>
  import { _ } from 'svelte-i18n';
  import { push } from 'svelte-spa-router';
  import { selectedBoilr } from '../store';

  export let infos;

  let onClickCreate = () => {
    selectedBoilr.set(infos);
    push('/creator');
  };
</script>

<style type="text/scss">
  @import '../../public/assets/theme.scss';

  .boilrplate-card {
    box-sizing: border-box;
    width: 292px;
    border-radius: 4px;
    box-shadow: $shadow;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 12px;
    text-align: start;
    background-color: $white;

    .img-container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 220px;
      background-color: $light-grey;
      border-radius: 4px;

      .logo {
        z-index: 10;
        width: 80%;
        height: 80%;
      }

      .bg {
        position: absolute;
        width: 90%;
        top: 0;
        left: 0;
      }
    }

    h3 {
      margin: 8px 0 6px 0;
      font-family: 'Heebo';
    }

    p {
      font-size: 14px;
      margin: 0;
    }

    .line {
      margin: 14px 0;
      width: 100%;
      height: 1px;
      background-color: #ececec;
    }

    span {
      cursor: pointer;
      font-size: 16px;
      color: $blue;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        color: $dark-blue;
      }
    }
  }
</style>

<div class="boilrplate-card {$$props.class}">
  <div class="img-container">
    <img class="logo" src="../assets/img/{infos.img}" alt="boilr logos" />
    <img class="bg" src="/assets/img/bg.svg" alt="Background" />
  </div>
  <h3>{infos.title}</h3>
  <p>{infos.desc}</p>
  <div class="line" />
  <span on:click={onClickCreate}>{$_('create_project')}</span>
</div>
