$(() => {
  // ________________________________Variables________________________________

  const $window = $(window);

  const $scrollPos = $('html, body');
  const $links = $('ul').children();
  let hashLocations = [];

  let currentProject = null;
  const $projectSelector = $('#project-selector');
  const $diveboardBtn = $('#diveboard-btn');
  const $diveboard = $('#diveboard');
  const $bemoBtn = $('#bemo-btn');
  const $bemo = $('#bemo');
  const $roquetteBtn = $('#roquette-btn');
  const $roquette = $('#roquette');
  const $shapesBtn = $('#shapes-btn');
  const $shapes = $('#shapes');
  const $closeBtn = $('i');

  // __________________________________Logic__________________________________



  function toggleHidden(element) {
    element.toggleClass('hidden');
    $projectSelector.toggleClass('hidden');

    currentProject = element;
  }

  function setHash(hash) {
    window.location.hash = '-' + hash;
  }

  for (let i = 0; i < $links.length; i++) {
    const hash = $(`${$links[i].hash}`);
    const obj = { name: $links[i].hash, offset: hash.offset().top - 100 };
    hashLocations.push(obj);
  }

  function checkHash() {
    for (let i = hashLocations.length - 1; i >= 0; i--) {
      if ($window.scrollTop() < hashLocations[i].offset) {
        setHash(hashLocations[i].name);
      } else {
        setHash('');
      }
    }
  }

  function smoothScroll(e) {
    e.preventDefault();

    const $dest = $(this.hash);
    $scrollPos.animate({
      scrollTop: $dest.offset().top - 100
    }, 1000, () => setHash($dest[0].id));
  }

  // _____________________________Event Listeners_____________________________

  $links.click(smoothScroll);
  $window.scroll(checkHash);

  $diveboardBtn.click(() => toggleHidden($diveboard));
  $bemoBtn.click(() => toggleHidden($bemo));
  $roquetteBtn.click(() => toggleHidden($roquette));
  $shapesBtn.click(() => toggleHidden($shapes));

  $closeBtn.click(() => toggleHidden(currentProject));

});
