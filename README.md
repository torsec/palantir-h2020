# Palantir's website

No trace about code??? Take a look in `gh-pages` branch.

## How to contribute

1.  Clone the Git repo and switch to `gh-pages` branch

        $ git clone https://github.com/torsec/palantir-h2020.git
        $ cd palantir-h2020
        $ git checkout -b gh-pages --track origin/gh-pages

2.  Make your changes (e.g. create a news)

        $ cd palantir-h2020/_news
        $ vim 2017-01-01-happy-new-year.md
        ... edit your news ...

3.  Commit and push (if allowed...) your changes

        $ cd palantir-h2020
        $ git commit -a -m "Added news"
        $ git push origin gh-pages:gh-pages

4.  That's all folks!
