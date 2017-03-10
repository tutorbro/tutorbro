import React, { Children } from 'react'
import Router from 'next/router'
import smoothScroll from '../utils/smoothScroll'
import { logEvent } from '../utils/analytics'

export default class LinkScroll extends React.Component {
  constructor (props) {
    super(props)
    this.linkClicked = this.linkClicked.bind(this)
  }
  linkClicked (e) {
    e.preventDefault()
    Router
      .push(this.props.href)
      .then(() => {
        return smoothScroll(this.props.href)
      })
      .then(() => {
        logEvent('Navigation', `Navigated to ${this.props.href}`)
        this.props.done && this.props.done()
      })
      .catch(err => {
        if (this.props.onError) this.props.onError && this.props.onError(err)
        console.error(err)
      })
  }
  render () {
    let { children } = this.props
    if (typeof children === 'string') {
      children = <a>{children}</a>
    }
    const child = Children.only(children)
    const props = { onClick: this.linkClicked }
    if (child.type === 'a' && !('href' in child.props)) {
      props.href = this.props.href
    }
    return React.cloneElement(child, props)
  }
}
