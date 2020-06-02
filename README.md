# Vega Website 4
[![Netlify Status](https://api.netlify.com/api/v1/badges/300c8347-d327-4192-a819-b49a684e06df/deploy-status)](https://app.netlify.com/sites/vega/deploys)

![Homepage](https://user-images.githubusercontent.com/6678/77306831-1cd6a000-6cf0-11ea-8b21-4b86f2380a28.png)

## Editing
The CMS that produces this site is [Hugo](https://gohugo.io/).

These tables should guide you to the right place. If you keep getting lost, add a guide here.

| To add a   | Add a file to | Called |
|------------|---------------|--------|
| Job        | `content/job/`   | _[number]_-_job-title_.md |
| Paper      | `content/paper/` | _[number]_-_paper-title_.md |

Other lists (events, for example) are just edited as HTML embedded in the markdown.

The number in the above filenames controls the order that they are rendered in any list. It's never shown, so you can use whatever scheme you want - `001-vega.md` is just as good as `1-vega.md`, and both will appear before `2-stuff.md`.

Or to edit some side wide stuff:

| To edit   | Open |
|-----------|--------|
| Top menu    | `config.toml` |
| Footer menu | `config.toml` |
| Page title | `config.toml` or  `content/`[section]`/`[page-name]`.md` |



### File format
Text is generally written in MarkDown, although some sections within that are HTML where a bit of custom layout is needed. This is fine. Each file will also have a section in between three pluses, like so:

```toml
+++
title = "This is the page title"
description = "A description for the page"
+++
Text that will be written in the page when a user vists
```

Basically every files is called `_index.md` in a folder named after the section that it represents. The two weird cases are Jobs and Papers.

#### Jobs
To add a job, add a new file, `4-job-title.md` in the `content/_job/` folder. The number at the start is the ordering, so feel free to change the numbers around. On the next build, this new role will appear in the Jobs list on the Who page, and increase the counter on the homepage. You can upload PDFs to `static/assets/your-file.pdf`

#### Papers
To add a job, add a new file, `4-paper-title.md` in the `content/_paper/` folder. The number at the start is the ordering, so feel free to change the numbers around. On the next build, this new role will appear in the Papers list on the Background page. You can upload PDFs to `static/assets/your-file.pdf`.


# Development
For local development, [install Hugo](https://gohugo.io/getting-started/installing/). On MacOSX, use [Brew](https://brew.sh/) (`brew install hugo`).

Hugo uses git submodules for theming. Run `git submodule update --init` to clone the theme.

## Deploying
The site is automatically deployed when files change in `master`.

# Credits
- Design & front-end build by [Big Fan](https://bigfan.agency)
- Hugo setup by @edd & [Big Fan](https://bigfan.agency)
- Information Architecture by Vega



