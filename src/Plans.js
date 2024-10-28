import { Component } from "react";
import planner from './icon.png';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export class Plans extends Component {
    state={
        userInput:'',
        plansList:[]
    }

    onChhangeEvent(e) {
        this.setState({userInput:e})
    }

    addItem(userAdd) {
        if (userAdd === '') {
            const MySwal = withReactContent(Swal)
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please, enter an item!",
            })
        }
        else {
            let listArray=this.state.plansList;
            listArray.push(userAdd);
            this.setState({ plansList:listArray, userInput:'' })
        }
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('Color');
    }

    deleteItem() {
        let listArray=this.state.plansList;
        listArray=[];
        this.setState({plansList:listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    // saveToLocalStorage = () => {
    //     localStorage.setItem("plansList", JSON.stringify(plansList));
    // }

    render() {
        return(

                <form onSubmit={this.onFormSubmit}>
                    <div className="plansContainer">
                        <input className="Input" onChange={(e) => { this.onChhangeEvent(e.target.value) }}
                        type="text" placeholder="What your plans for today?"
                        value={ this.state.userInput } />
                    </div>
                    <div className="plansContainer">
                        <button className="Add" onClick={ () => this.addItem(this.state.userInput) }>Add</button>
                    </div>
                    <ul className="plansContainer">
                        {this.state.plansList.map((item,index) => (
                        <li onClick={ this.crossedWord }
                        key={ index }>
                        <img className="Icon" src={ planner } width={40} alt="icons"/>
                        { item }</li>
                    ))}
                    </ul>
                    <div className="plansContainer">
                        <button className="Add" onClick={() => this.deleteItem()}>Delete</button>
                    </div>
                </form>
        )
    }
}