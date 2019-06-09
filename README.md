Understanding sex, gender and sexuality
=======================================

This was primarily written to document my own understanding of sex, gender and sexuality, with secondary objectives of:
* Providing a resource that others may find useful
* Experimenting with information presentation techniques

View the document at: <https://understanding-gender.github.io/>

## Comments, errors, corrections, or further information

If there is anything incorrect or warranting of improvement then please let me know by one of the following methods:
* Comments on anywhere that this is posted publicly
* Direct communication via <john@extuitive.co.uk>
* Comments on this Github repository
* Pull requests on this repository

I genuinely want both my understanding and this resource to be correct!

## Building
The main source file is [`gender.md`](https://github.com/understanding-gender/understanding-gender.github.io/blob/master/gender.md).
This is a markdown file and should look sensible when viewed as such.
It should be compiled into `index.html` using Pandoc,
with reference to the `tufte.css` stylesheet.
The bash script `compile.sh` is included to facilitate this.

## Notes on design

### Layout
Changes from default `tufte.css` include:
* Slightly decreased left and right margins to allow more space for text and figures side-by-side.
* Increased figure margin width to balance.
* Allowing sections to overflow, such that figures do not end up spanning sections.
* Removed hiding of margin figures during narrow screen viewing.

### Fonts
'Handwritten' type fonts and diagrams are used to try to convey both a sense of personal explanation,
and uncertainty about specific details.

### Diagrams
All diagrams were drawn in Inkscape,
using the `Roughen` path effect to give a 'sketchy' style.
CSS classes are added to shapes in Inkscape to enable interactivity;
unfortunately there is currently an [issue](https://bugs.launchpad.net/inkscape/+bug/167937) in Inkscape where styles set on a class are also set directly within the elements;
therby overriding the class styling.
Working around this requires some tedious manual editing of the SVG output
(there is an active [bounty](https://bugs.launchpad.net/inkscape/+bug/167937) if anyone wants to fix this!).

In order to use separate SVG files but still allow dynamic styling they must be 'inlined'.
Once the document is loaded `inlineSvg.js` calls `SVGInjector` to move all SVG code into the DOM.
This also places them within a `div` wrapper and removes their height and width attributes to make them responsive.

Event listeners are added to all text with the `figEm` class,
allowing it to emphasise the relevant elements in diagrams
(as defined by the list of other classes accompanying the `figEm`).
Emphasised elements have an `active` class added to them,
allowing their emphasis style to be defined individually.

### Structure
I tend to write my source using [Semantic](https://rhodesmill.org/brandon/2012/one-sentence-per-line/) [linefeeds](https://scott.mn/2014/02/21/semantic_linewrapping/),
sorry (not sorry) if you don't like it.

## Licence
This work is licenced under a [Creative Commons Attribution Share Alike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) licence.
