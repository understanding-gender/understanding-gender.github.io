#!/bin/bash
pandoc gender.md --section-divs --from markdown --filter pandoc-sidenote --to html5+smart --template=tufte-css/tufte.html5 -c tufte-css/tufte.css -c tufte-css/pandoc.css -c figEm.css -o index.html
