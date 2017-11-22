let currentProject = null;

$(() => {

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

  function toggleHidden(element) {
    element.toggleClass('hidden');
    $projectSelector.toggleClass('hidden');

    currentProject = element;
  }

  $diveboardBtn.click(() => toggleHidden($diveboard));
  $bemoBtn.click(() => toggleHidden($bemo));
  $roquetteBtn.click(() => toggleHidden($roquette));
  $shapesBtn.click(() => toggleHidden($shapes));

  $closeBtn.click(() => toggleHidden(currentProject));

});
