import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  render() {
    console.log('child render')
    const { content } =  this.props
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    )
  }

  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

// 对TodoItem的接收一些属性类型做校验
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

// 设置TodoItem的一些默认属性
TodoItem.defaultProps = {
  content: 'hello world'
}

export default TodoItem