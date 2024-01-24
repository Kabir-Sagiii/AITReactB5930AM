import { Component } from "react";

class ClassDemo extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps is called");
    if (state.title === null) {
      return props;
    } else {
      return null;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate is called");
    return true;
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate is called");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate is called");
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      title: null,
    };
    console.log("Constructor is Called");
  }

  componentDidMount() {
    console.log("componentDidMount is called");
  }

  updateTitle = () => {
    this.setState({
      title: "Title Updated of Class Component",
    });
  };

  render() {
    console.log("render is called");
    return (
      <div className="container mt-5 p-4">
        <h2 className="text-success">{this.state.title}</h2>
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
