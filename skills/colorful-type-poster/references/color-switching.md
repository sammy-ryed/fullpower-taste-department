# Palette switching

Source: https://goodglyphs.com/ and eight user-supplied screenshots. Images show a two-color system in mint/black, brown/white, mauve/red, yellow/black, white/black, gray/blue, and red/white states. The user explicitly requested the site's color-changing button. The screenshots and text extraction do not establish its exact original implementation or palette order.

## Supplied visual references

- [Brown and white](screenshots/01-brown.png)
- [Mint and black](screenshots/02-mint.png)
- [Mauve and red](screenshots/03-mauve-red.png)
- [Yellow and black](screenshots/04-yellow.png)
- [Second brown state](screenshots/05-brown.png)
- [White and black](screenshots/06-white.png)
- [Gray and blue](screenshots/07-blue.png)
- [Red and white](screenshots/08-red.png)

Keep these as reference images, not full-page artwork in a generated website. Different specimens are visible between screenshots; this does not establish whether palette changes also shuffle the glyphs.

## Reusable implementation

Import `assets/palettes.css` and initialize `mountColorSwitcher(root, button, status)` from `assets/color-switcher.mjs`. Root is the section or page wrapper, button is a native `button` with visible text `Change colors`, and status is a separate text element with `role="status"`. Mount once after the elements exist and call the returned cleanup function on unmount. Framework applications may implement equivalent state directly.

The controller cycles through seven curated pairs and starts at mint. It sets `data-good-glyphs-palette`, announces the chosen name, and retains focus. It does not shuffle specimens, store data, fetch resources, or mutate elements outside the supplied root. Keep the button inside that root. Session persistence is optional and unnecessary for the workshop.

Normal content uses `--gg-canvas` and `--gg-ink`; `.gg-inverted` swaps them. Use `currentColor` for icon strokes and borders. Root and inverted panel elements using `.gg-outline` receive matching outlines, hover inversion, and focus treatment. Apply `.gg-outline` only to actual controls, not body text. Input fills and placeholder styles should inherit the same pair rather than use hardcoded black.

## Palette choices

The mint pair comes from the supplied tokens. Other hex values are approximations of the screenshots, not verified original site tokens. Red variants are deliberately darkened so normal text meets 4.5:1 contrast in both directions. Preserve the overall pair relationships rather than reproducing unreadable small text from a screenshot.

| Name | Canvas | Ink |
| --- | --- | --- |
| Mint | #c7ffcd | #000000 |
| Brown | #806247 | #ffffff |
| Mauve and red | #b39cb1 | #701000 |
| Yellow | #ffeb62 | #000000 |
| White | #ffffff | #000000 |
| Blue | #e1e1e1 | #1600df |
| Red | #d40000 | #ffffff |

The switch uses no animation, preventing flashes and low-contrast transition frames. If adding a short transition, honor reduced motion and verify contrast throughout it. Test Enter and Space, repeated cycling and wraparound, unchanged input values, visible focus, and an inverted panel in every palette.
