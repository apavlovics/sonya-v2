$(document).ready(() => {

  $('#menu-open').click(event => {
    $('.nav-minimized').addClass('hidden')
    $('.nav-maximized').addClass('visible')
  })

  $('#menu-close').click(event => {
    $('.nav-minimized').removeClass('hidden')
    $('.nav-maximized').removeClass('visible')
  })

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
