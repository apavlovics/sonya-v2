$(document).ready(() => {

  $('#menu').click(event => {
    $('.main-menu').toggleClass('menu-visible')
    $('.language-menu').toggleClass('menu-visible')
  })

  $('.preview-large, .preview-medium').hover(event => {
    const preview = $(event.currentTarget)
    const otherPreviews = $('.preview-large, .preview-medium')

    preview.addClass('preview-focused')
    preview.find('.details').addClass('details-visible')
    otherPreviews.addClass('desaturated')
  }, event => {
    const preview = $(event.currentTarget)
    const otherPreviews = $('.preview-large, .preview-medium')

    preview.removeClass('preview-focused')
    preview.find('.details').removeClass('details-visible')
    otherPreviews.removeClass('desaturated')
  })
})
