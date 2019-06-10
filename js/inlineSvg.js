if (window.NodeList && !NodeList.prototype.forEach) { // polyfill for browsers not supporting forEach on NodeLists
  NodeList.prototype.forEach = Array.prototype.forEach;
}

document.querySelectorAll('img[src$=".svg"]').forEach(function(e) {
  SVGInjector(e, {each: function(svg){
    svg.querySelectorAll('*').forEach(function(svgEl) {
      svgEl.classList.add('mute'); // mute all elements initially
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
  }});
});

document.querySelectorAll('.figEm').forEach(function(e) { // for all text with the figEm class...
  e.addEventListener("mouseover", function() {  // add a mouse hover event
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
