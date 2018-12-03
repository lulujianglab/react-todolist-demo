import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './style.css'

class Todolist extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    // this.handleToggle = this.handleToggle.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
        {
          this.state.data.map((item, index) => {
            return (
              <CSSTransition
                timeout={1000}
                classNames='fade'
                unmountOnExit
                onEntered={(el) => {el.style.color='blue'}}
                appear={true}
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            )
          })
        }
        </TransitionGroup>
          <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    );
  }

  // handleToggle() {
  //   this.setState({
  //     show: this.state.show ? false : true
  //   })
  // }

  handleAddItem() {
    this.setState((prevState) => {
      return {
        data: [...prevState.data, 'item']
      }
    })
  }
}

export default Todolist;
