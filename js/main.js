$(document).ready(() => {
  const togglePreviewContents = event => {
    const previewContents = $(event.currentTarget)
    previewContents.find('.details').toggleClass("details-visible")
  }
  $('.preview-contents').hover(togglePreviewContents, togglePreviewContents)
})
