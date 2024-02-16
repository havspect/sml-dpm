<template>
    <button>
        <a
            className="buyButton"
            target="_blank"
            href="https://www.buymeacoffee.com/havspect"
        >
      <img
        className="coffeeImage"
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <span className="coffeeButtonText">Buy me a coffee</span>
        </a>
    </button>
</template>

<style scoped>
.buyButton {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  color: #000;
  background-color: lightcyan;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.5rem;
  font-size: 1rem;
  /* letter-spacing: 0.6px; */
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  /* font-family: cursive; */
}
.buyButton:hover,
.buyButton:active,
.buyButton:focus {
  text-decoration: solid;
  box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
  opacity: 0.85;
  color: #000;
}

.coffeeImage {
  height: 2vh;
  box-shadow: none;
  border: none;
  vertical-align: middle;
}

.coffeeButtonText {
  margin-left: 15px;
  font-size: 0.8rem;
  vertical-align: middle;
}
</style>