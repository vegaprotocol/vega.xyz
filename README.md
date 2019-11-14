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

## Development
Hugo is installed with [Homebrew](https://brew.sh/). On a mac, install with `brew install hugo` - on Windows or Linux, you're on your own.

Hugo uses git submodules for theming. Run `git submodule update --init` to clone the theme.

## Deploying
The site is automatically deployed when files change in `master`.

# Notes for tunrning this in to a production website
- The templates are slightly messed up, so the header menu is actually rendered in the `<head>` tag
- Only minimal effort has been put in to responsiveness
- We need to embed a Moosend signup form on the 'Connect' page
- The CSS of the inner pages is very basic. The right hand navigation style is bad. The text is probably too wide
- The grid of links on the homepage can overlap at screen sizes, handles wrapping poorly and is generally not great
- A dark theme would be nice, but is not essential
- Titles, meta descriptions and open graph/twitter meta tags are missing
- The team photo is very unoptimised
- ethereum.org has provided us with inspiration, but the current layout and style is uncomfortably close, so this needs to change a bit