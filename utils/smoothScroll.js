const scrollTo = (to, duration) => {
  if (document.body.scrollTop === to) return
  var diff = to - document.body.scrollTop
  var steps = duration / 10
  var scrollStep = diff / steps
  var scrollInterval = setInterval(
    function () {
      if (steps-- > 0) {
        document.body.scrollTop += scrollStep
      } else {
        document.body.scrollTop = to
        clearInterval(scrollInterval)
      }
    },
    10
  )
}

export default url => {
  var pattern = /^(\/#.+)|(.+(\/#.+))$/
  if (pattern.test(url)) {
    const hash = pattern.exec(url).filter(item => item).pop()
    const dest = document.getElementById(hash.replace('/#', ''))
    scrollTo(dest.offsetTop, 600)
  }
}
