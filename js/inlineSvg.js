if (window.NodeList && !NodeList.prototype.forEach) { // polyfill for browsers not supporting forEach on NodeLists (IE and edge)
  NodeList.prototype.forEach = Array.prototype.forEach;
}

if (!Object.getOwnPropertyDescriptor(Element.prototype,'classList')){ // polyfill for IE not supporting classList on SVG elements
  if (HTMLElement&&Object.getOwnPropertyDescriptor(HTMLElement.prototype,'classList')){
    Object.defineProperty(Element.prototype,'classList',Object.getOwnPropertyDescriptor(HTMLElement.prototype,'classList'));
  }
}

var ua = window.navigator.userAgent;
if (/MSIE|Trident/.test(ua)) {
  var sections = document.getElementsByTagName('section');
  for (var i = 0; i < sections.length; i++) sections[i].style.overflow = 'hidden';
}

document.querySelectorAll('img[src$=".svg"]').forEach(function(e) {
  SVGInjector(e, {each: function(svg){
    svg.querySelectorAll('*').forEach(function(svgEl) {
      if(svgEl.classList) svgEl.classList.add('mute'); // mute all elements initially
    });
    // fix give the svg a max width and height but make it responsive
    var wrapper = document.createElement('div'); // add a wrapper to the svg
    svg.parentNode.replaceChild(wrapper, svg);
    wrapper.appendChild(svg);
    wrapper.style.maxWidth = svg.getAttribute("width") // set the wrapper max width/height based on the svg natural size
    wrapper.style.maxHeight = svg.getAttribute("height")
    wrapper.classList.add('svgWrapper');
    svg.removeAttribute("height"); // remove svg fixed size to make it responsive
    svg.removeAttribute("width");

    // horrible IE hacks to follow...
    if (/MSIE|Trident/.test(ua)) {
      wrapper.style.position = 'relative';
      wrapper.style.paddingBottom = (100*parseInt(wrapper.style.maxHeight,10)/parseInt(wrapper.style.maxWidth,10))+'%';
      wrapper.style.maxWidth = null;
      svg.style.position = 'absolute';
    }
  }});
});

document.querySelectorAll('.figEm').forEach(function(e) { // for all text with the figEm class...
  e.addEventListener("mouseover", function() { // add a mouse hover event
    e.className.split(/\s+/).forEach(function(classEm) { // for each other class in the moused text
      if (classEm!='figEm') document.querySelectorAll('.'+classEm).forEach(function(emEl) { // find all objects to emphasise
        emEl.classList.add('active');
      });
    });
  });
  e.addEventListener("mouseout", function() { // add a mouse out event
    e.className.split(/\s+/).forEach(function(classEm) { // for each other class in the moused text
      if (classEm!='figEm') document.querySelectorAll('.'+classEm).forEach(function(emEl) { // find all objects to de-emphasise
        emEl.classList.remove('active');
      });
    });
  });
});
