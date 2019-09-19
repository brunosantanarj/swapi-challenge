<style>
  .lds-ripple {
    position: relative;
    width: 64px;
    height: 64px;
    margin: 20px auto;
  }

  .circle {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .circle-out {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
</style>

<div class="lds-ripple">
  <div class="lds-ripple_first circle" />
  <div class="lds-ripple_out circle circle-out" />
</div>