# Xiuming Liu's Academic Homepage

English | [简体中文](docs/README-zh.md)

Source code for [Xiuming Liu's academic homepage](https://lxmliu2002.github.io/), built with Jekyll and deployed on GitHub Pages.

## Features

- English and Chinese content on the same URL, with the selected language saved in the browser.
- Responsive layouts for desktop and mobile screens.
- Light and dark color themes.
- Structured sections for biography, news, education, experience, publications, projects, awards, service, and contact information.
- Collapsible news and email lists for a concise default view.
- Direct deployment through GitHub Pages from the `main` branch.

## Project Structure

| Path | Purpose |
| --- | --- |
| [`_pages/about.md`](_pages/about.md) | English homepage content |
| [`_pages/about_zh.md`](_pages/about_zh.md) | Chinese homepage content |
| [`_data/navigation.yml`](_data/navigation.yml) | English and Chinese navigation labels |
| [`_layouts/home.html`](_layouts/home.html) | Homepage document layout |
| [`_includes/home-masthead.html`](_includes/home-masthead.html) | Header, navigation, theme control, and language control |
| [`assets/css/home.scss`](assets/css/home.scss) | Homepage visual styles and responsive rules |
| [`assets/js/home.js`](assets/js/home.js) | Theme, language, navigation, and collapsible-list interactions |
| [`images/`](images/) | Profile, institution, and site images |

The English and Chinese content files intentionally use the same section structure and IDs. The Chinese content is loaded as an in-page template, so switching languages does not add `/zh/` or navigate away from the homepage.

## Local Development

### Requirements

- Ruby 3.3.12
- Bundler
- A Jekyll-compatible build environment

Install dependencies:

```bash
bundle install
```

Start the local server with live reload:

```bash
bash run_server.sh
```

Open [http://127.0.0.1:4000](http://127.0.0.1:4000) in a browser. Restart the server after changing `_config.yml`, because Jekyll does not reload configuration changes automatically.

## Validation

Run these checks before committing:

```bash
bundle exec jekyll build
node --check assets/js/home.js
git diff --check
```

The generated site is written to `_site/`.

## Deployment

GitHub Pages builds and publishes the site when changes are pushed to `main`:

```bash
git push origin main
```

The production site is available at [https://lxmliu2002.github.io/](https://lxmliu2002.github.io/).

## Content Maintenance

- Keep `_pages/about.md` and `_pages/about_zh.md` structurally aligned when adding or reordering sections.
- Keep the English and Chinese navigation entries in `_data/navigation.yml` in the same order as the page sections.
- Place presentation and interaction rules in `assets/css/home.scss` and `assets/js/home.js`; keep the page files focused on content.
- Do not publish private or under-review manuscript files unless public distribution has been explicitly approved.

## Acknowledgements

The homepage design draws inspiration from [Weiyuan Li's homepage](https://github.com/KuroIsCoding/KuroIsCoding.github.io) and [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io). Upstream attribution and applicable license notices are preserved here and in [`LICENSE`](LICENSE).

AcadHomepage incorporates [Font Awesome](https://fontawesome.com/) and is influenced by [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) and [Academic Pages](https://github.com/academicpages/academicpages.github.io). The project also benefited from technical references and ideas provided by [Qwen](https://chat.qwen.ai/) during earlier development.

## License

See [`LICENSE`](LICENSE) for licensing and upstream attribution details.
