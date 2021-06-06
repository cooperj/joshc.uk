# DEMOS

This directory contains static files served to be used as a demo.

Projects have to be placed within their respective folder.

For example, portfolio projects must be structured as the following

```
/static/demos/portfolio/tag
```

The *Contineo* project must be structured like this. With the site address being `https://joshc.uk/portfolio/contineo`.

```
/static/demos/portfolio/contineo/
```

## Disclaimer

Any site/demo which could be mistaken for being a live company/site, **must** have a disclaimer included by adding the following line the **top** of the 'body'.

```html
<script
    type="text/javascript"
    id="disclaimer"
    src="/demos/disclaimer.js"
></script>
```
