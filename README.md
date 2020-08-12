# svelte-image-loader

[![NPM version](https://img.shields.io/npm/v/svelte-image-loader.svg?style=flat)](https://www.npmjs.com/package/svelte-image-loader) [![NPM downloads](https://img.shields.io/npm/dm/svelte-image-loader.svg?style=flat)](https://www.npmjs.com/package/svelte-image-loader) [![Svelte v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev)

Svelte action to increase the level of UX by neatly preloading images (icons)

![example](https://user-images.githubusercontent.com/25938785/90069131-846ea580-dcfa-11ea-9ff5-0844e65af73f.gif)

## :rocket: Features

This is Svelte's action to handle the `error` and`load` events of images correctly with filling it with color.

- Easy to use (an implementation through the Svelte action)
- Light size (zero-dependencies :fire: :boom:)
- Any custom CSS for loading/error state

## Install

```bash
npm i svelte-image-loader
```

## Usage

```html
<script>
  import imageLoader from 'svelte-image-loader'

  ...

  const src = `...`
  const borderRadius = '50%'
</script>

<img {src} alt="" use:imageLoader="{borderRadius}" />

<style lang="scss">
  $color-icon-secondary: #BFC1C7;

  ...

  :global(.svelte-image-loader) {
  	background-color: $color-icon-secondary;
  }

  ...
</style>
```

Also you can initially call `initImageLoader` function to set custom class name (other than `.svelte-image-loader`).

## API

### Parameters

| Name         | Type   | Default | Description                                |
| ------------ | ------ | ------- | ------------------------------------------ |
| borderRadius | string | `''`    | CSS `border-radius` of loading/error state |

## License

MIT &copy; [Denis Stasyev](https://github.com/denisstasyev)
