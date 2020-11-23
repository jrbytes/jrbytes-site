import { useEffect } from 'react'
import { debounce } from 'lodash'

function AnimeScroll(): void {
  useEffect(() => {
    const target = document.querySelectorAll('[data-anime]')
    const animationClass = 'animate'

    function animeScroll() {
      const windowTop = window.pageYOffset + window.innerHeight * 0.75
      target.forEach(function fn(e) {
        if (e instanceof HTMLElement) {
          if (windowTop > e.offsetTop) {
            e.classList.add(animationClass)
          } else {
            e.classList.remove(animationClass)
          }
        }
      })
    }

    if (target.length) {
      window.addEventListener(
        'scroll',
        debounce(function fn() {
          animeScroll()
        }, 200),
      )
    }
  })
}

export default AnimeScroll
