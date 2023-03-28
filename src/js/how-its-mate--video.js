window.addEventListener('DOMContentLoaded', function () {
  var video = document.querySelector('.how-its-made__video');

  video.addEventListener('click', function () {
    if (video.classList.contains('ready')) {
      return;
    }
    video.classList.add('ready');
    var src = video.dataset.src;
    video.insertAdjacentHTML(
      'afterbegin',
      '<iframe width="560" height="315" src="' +
        src +
        '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    );
  });
});
