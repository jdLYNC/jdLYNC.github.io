let currentProject = null;

$(() => {

  const $hashLink = $('ul').children();

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

  $hashLink.click(function(e) {
    e.preventDefault();
    const $dest = $(this.location.hash);

    console.log($dest);

    // e.preventDefault();

    // e.preventDefault();
    // console.log(e);
    // console.log($(e.hash).offset().top);
  });

  $diveboardBtn.click(() => toggleHidden($diveboard));
  $bemoBtn.click(() => toggleHidden($bemo));
  $roquetteBtn.click(() => toggleHidden($roquette));
  $shapesBtn.click(() => toggleHidden($shapes));

  $closeBtn.click(() => toggleHidden(currentProject));

});
