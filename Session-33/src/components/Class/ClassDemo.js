import { Component } from "react";
import Header from "./Header";

class ClassDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Class Component First Title",
    };
  }

  updateTitle = () => {
    this.setState({
      title: "Title Updated of Class Component",
    });
  };

  render() {
    return (
      <div className="container mt-5 p-4">
        <Header />
        <h2 className="text-success">{this.props.title}</h2>
        <p className="lead">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          asperiores quaerat nesciunt magnam blanditiis nam necessitatibus,
          nihil nemo iusto ipsum esse. Dolores excepturi enim explicabo
          reiciendis voluptas soluta nobis velit, quam iusto ullam minima
          sapiente, nemo aspernatur molestias? Dignissimos vel, nam aut
          inventore amet quidem cupiditate natus quasi ut sunt!
        </p>
        <button className="btn btn-success" onClick={this.updateTitle}>
          Change title
        </button>
      </div>
    );
  }
}

export default ClassDemo;
