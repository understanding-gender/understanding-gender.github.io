document.querySelectorAll('img[src$=".svg"]').forEach(function(e) {
  SVGInjector(e, {each: function(svg){
    svg.querySelectorAll('*').forEach(function(svgEl) {
      // svgEl.classList.add('mute'); // mute all elements initially
    });
    console.log(svg);
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
      if (classEm!='figEm') document.querySelectorAll('.'+classEm).forEach(function(emObj) { // find all objects to de-emphasise
        emObj.classList.remove('active');
      });
    });
  });
});
