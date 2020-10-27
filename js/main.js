$(document).ready(() => {
  $('.preview-large, .preview-medium').hover(event => {
    const preview = $(event.currentTarget)
    preview.addClass('preview-focused')
    preview.find('.details').addClass('details-visible')
    $('.fog').addClass('fog-visible')
  }, event => {
    const preview = $(event.currentTarget)
    preview.removeClass('preview-focused')
    preview.find('.details').removeClass('details-visible')
    $('.fog').removeClass('fog-visible')
  })
})
