import React from "react";

export class ShoppingList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text:''};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({text: event.target.value})
    }
  
    handleSubmit (event) {
      event.preventDefault();
      console.log(this.state)
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date().now,
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: '',
      }))
    }
  
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <form onSubmit={this.handleSubmit}>
            <input id="new-item" placeholder="Add New Item" onChange={this.handleChange} />
            <button>Add</button>
          </form>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
          <TodoList items={this.state.items} />
        </div>
      );
    }
  }
  
  class TodoList extends React.Component {
    render () {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }