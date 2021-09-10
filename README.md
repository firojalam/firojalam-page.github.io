[![Netlify Status](https://api.netlify.com/api/v1/badges/f5e700ee-4927-41fa-bab9-57057c7f62ac/deploy-status)](https://app.netlify.com/sites/firojalam/deploys)

# Instructions


## To run locally (not on GitHub Pages, to serve on your own computer)

1. Clone the repository and made updates as detailed above
1. Make sure you have ruby-dev, bundler, and nodejs installed: `sudo apt install ruby-dev ruby-bundler nodejs`
1. Run `bundle clean` to clean up the directory (no need to run `--force`)
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
2. Run `bundle exec jekyll` or `gulp` to generate the HTML and serve it from `localhost:3000` the local server will automatically rebuild and refresh the pages on change.
