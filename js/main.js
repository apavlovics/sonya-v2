$(document).ready(() => {

  $('.preview').hover(event => {
    const preview = $(event.currentTarget)
    const otherPreviews = $('.preview')

    preview.addClass('focused')
    preview.find('.details').addClass('visible')
    otherPreviews.addClass('desaturated')
  }, event => {
    const preview = $(event.currentTarget)
    const otherPreviews = $('.preview')

    preview.removeClass('focused')
    preview.find('.details').removeClass('visible')
    otherPreviews.removeClass('desaturated')
  })
})
