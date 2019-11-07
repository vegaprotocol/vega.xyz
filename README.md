# Proposal for Vega Website 4

## Editing
The CMS that produces this site is [Hugo](https://gohugo.io/).

These tables should guide you to the right place. If you keep getting lost, add a guide here.

| To add a   | Add a file to | Called |
|------------|---------------|--------|
| Job        | `content/job/`   | _[number]_-_job-title_.md |
| Paper      | `content/paper/` | _[number]_-_paper-title_.md | 
| Investor   | `content/investor/`  | _[number]_-_job-title_.md |
| Team Member| `content/team/` | _[number]_-_paper-title_.md | 

The number in the above filenames controls the order that they are rendered in any list. It's never shown, so you can use whatever scheme you want - `001-vega.md` is just as good as `1-vega.md`, and both will appear before `2-stuff.md`.

Or to edit some side wide stuff:
| To edit   | Open |
|-----------|--------|
| Top menu    | `config.toml` |
| Footer menu | `config.toml` | 
| Page title | `config.toml` or  `content/`[section]`/`[page-name]`.md` | 

### File format
Text is generally written in MarkDown. Each file will also have a section in between three pluses, like so:

```toml
+++
title = "This is the page title"
description = "A description for the page"
+++
Text that will be written in the page when a user vists
```

## Deploying
The site is automatically deployed when files change in `master`.