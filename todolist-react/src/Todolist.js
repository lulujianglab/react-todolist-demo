import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import axios from 'axios'
import './style.css'

class Todolist extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }

  componentDidMount() {
    axios.get('/list.json')
      .then((res) => { 
        this.setState(() => ({      
          list: [...res.data]
      }))
      })
      .catch(() => console.log('error'))
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  getTodoItem() {
    const { list } = this.state
    return list.map((item, index) => {
      return (
        <div key={index}>
          <TodoItem  
            content={item} 
            index={index}
            deleteItem={this.handleDeleteItem}
          />
        </div>
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
        inputValue: value
    }))
  }

  handleBtnClick() {
    this.setState((prevState) =>({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  // handleDeleteItem(e) {
  //   const index = e.target.getAttribute('index')
  //   const list = [...this.state.list] // 拷贝list数组
  //   list.splice(index,1)
  //   this.setState({
  //     list
  //   })
  // }
  handleDeleteItem(index) {
    // state 不允许做任何改变
    const list = [...this.state.list] // 拷贝list数组
    list.splice(index,1)
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index,1)
      return {list}
    })
  }
}

export default Todolist;
