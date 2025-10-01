<template>
  <div role="button" tabindex="0" class="btn">
    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="circlePath"
        class="circle-path"
        d="M56.5 104a48 48 0 1 1 0-96 48 48 0 0 1 0 96z"
      />

      <text>
        <textPath xlink:href="#circlePath">
          ✦ Написать нам ✦ Написать нам ✦ Написать нам
        </textPath>
      </text>

      <circle cx="55.5" cy="55.5" r="24" />

      <svg
        viewBox="0 0 21 18"
        fill="none"
        x="42"
        y="44"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.665 0.716942L0.934973 7.55394C-0.275027 8.03994 -0.268027 8.71494 0.712973 9.01594L5.26497 10.4359L15.797 3.79094C16.295 3.48794 16.75 3.65094 16.376 3.98294L7.84297 11.6839H7.84097L7.84297 11.6849L7.52897 16.3769C7.98897 16.3769 8.19197 16.1659 8.44997 15.9169L10.661 13.7669L15.26 17.1639C16.108 17.6309 16.717 17.3909 16.928 16.3789L19.947 2.15094C20.256 0.911942 19.474 0.350942 18.665 0.716942Z"
          fill="white"
        />
      </svg>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 113px;
  height: 113px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > svg {
    width: 100%;
    height: 100%;

    text {
      font-family: var(--font-secondary);
      vertical-align: middle;
      fill: var(--q-dark);
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      letter-spacing: 0px;
      transition: transform 0.3s ease-in-out;
      transform-origin: center;
      transition: transform 0.3s ease;
    }

    circle {
      fill: var(--q-dark);
    }
  }

  @media (hover: hover) {
    &:hover {
      & > svg text {
        transform: rotate(20deg);
      }
    }
  }
}
</style>
