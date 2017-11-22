$(() => {
  // ________________________________Variables________________________________


  const $scrollPos = $('html, body');
  const $links = $('ul').children();

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

  // ________________________________Functions________________________________

  function toggleHidden(element) {
    element.toggleClass('hidden');
    $projectSelector.toggleClass('hidden');

    currentProject = element;
  }

  function setHash(hash) {
    window.location.hash = '-' + hash;
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

  $diveboardBtn.click(() => toggleHidden($diveboard));
  $bemoBtn.click(() => toggleHidden($bemo));
  $roquetteBtn.click(() => toggleHidden($roquette));
  $shapesBtn.click(() => toggleHidden($shapes));

  $closeBtn.click(() => toggleHidden(currentProject));

});
