$(document).ready(() => {
  const togglePreview = event => {
    const previewContents = $(event.currentTarget)
    previewContents.toggleClass('z-index-maximized')
    previewContents.find('.details').toggleClass('details-visible')
    $('.fog').toggleClass('fog-visible')
  }
  $('.preview-large, .preview-medium').hover(togglePreview, togglePreview)
})
