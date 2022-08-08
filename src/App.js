import React from "react"
import styled from "styled-components"


const Titulo = styled.h1`
  color: blue;

`
const Corpo = styled.div`
display: flex;
flex-direction: column;

align-items: center;
width: 50%;
height: 800px;
margin: 0 auto;
background-color: gray;
border-radius: 30px;

`

const Input = styled.input`

border-radius: 20px;
border: 4px solid blue;

`
const Botao = styled.button`

width: 10%;
border-radius: 10px;
border: 2px solid blue;

`
const Ul = styled.ul`
display: flex;
align-items: center;
justify-content: center;


`
const List = styled.li`
list-style: none;
background-color: white;
width: 50px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
border: 2px solid blue;
`

export default class App extends React.Component{
  
  state = {
    tarefa: "",
    lista: []
  }
  
  
  handleChange = (event) => {
    this.setState({tarefa: event.target.value}) 
  }
  
  add = () => {
    if (this.state.tarefa !== "" && !this.state.tarefa.match(/^[ \t]+$/)){
      this.setState({
        lista: this.state.lista.concat({
          tarefa: this.state.tarefa,
          id:Date.now()
        }),
      tarefa: ""
      })
    }
  }
  enter = (e) => {
    if (this.state.tarefa.length > 0 && e.key === "Enter") {
      this.setState({
        lista: this.state.lista.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      })
    }
  }

  clear = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => item.id !== id)
    }) 
  }



  render(){
    return(
      
      <Corpo>
        <Titulo>Todo-list:</Titulo>
        <Input 
        onChange={this.handleChange} 
        value={this.state.tarefa} 
        onKeyPress={this.enter}/>
        <Botao onClick={this.add}>Add!</Botao>
        {this.state.lista.map((item) => (
          <div>
            <Ul key={item.id}>
              <List>{item.tarefa}</List>
            </Ul>
            <button onClick={() => this.clear(item.id)}>X</button>
          </div>
        ))}
      </Corpo>
    )
  }
}