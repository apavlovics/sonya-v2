$(document).ready(() => {

  $('#menu-open').click(event => {
    $('.nav-minimized').addClass('nav-minimized-hidden')
    $('.nav-maximized').addClass('nav-maximized-visible')
  })

  $('#menu-close').click(event => {
    $('.nav-minimized').removeClass('nav-minimized-hidden')
    $('.nav-maximized').removeClass('nav-maximized-visible')
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
