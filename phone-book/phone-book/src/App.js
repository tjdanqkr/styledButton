import React,{Component} from 'react';
import './App.css';
import PhoneForm from './PhoneForm';
import PhoneInfo from './PhoneInfo';
import PhoneInfoList from './PhoneInfoList';
class App extends Component{
  /*handleCreate = (data) =>{
    console.log(data);
  }*/
  
  id =2 
  state ={
    information:[
      {
        id:0,
        name: '박성무',
        phone : '0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone : '0001'
      }
    ]
  }
    
  
  handleCreate = (data) =>
  {
    const {information} = this.state;
    this.setState({
      information: information.concat({ id: this.id++,...data})
    })
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 유지
      )
    })
  }
  render(){
    const {information, keyword}= this.state;
    const a = [1,2,3,4,5];
    const b= [a.map(number => number * 2)];

    return(
      // <div>
      //   <PhoneForm onCreate= {this.handleCreate}></PhoneForm>
      //   {JSON.stringify(information)}
      // </div>
      <div>
        
        <PhoneForm onCreate={this.handleCreate}/>
        <input placeholder="검색할 이름을 입력하세요.." onChange={this.handleChage} value={keyword}></input>
        <PhoneInfoList data={this.state.information} onRemove={this.handleRemove} onUpdate={this.handleUpdate}></PhoneInfoList>
        
      </div>
      
    );
  }
  
}

export default App;
