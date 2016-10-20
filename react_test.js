class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    var style = {
      height: `75px`,
      width: `75px`,
      border: `2px solid black`,
      fontSize: `60px`,
      textAlign: `center`
    }
    return (
      <td style={style} onClick={() => this.props.swap(this.props.loc)}>{this.props.display}</td>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      board: [['','',''],['','',''],['','','']],
      currentTurn: 'X'
    }
  }

  swapTurn (loc) {
    var curr = this.state.currentTurn === 'X' ? 'O' : 'X';
    var currBoard = this.state.board;
    if (currBoard[loc[0]][loc[1]] === '') {
      currBoard[loc[0]][loc[1]] = this.state.currentTurn;
    } else {
      currBoard[loc[0]][loc[1]] = '';
    }
    this.setState({
      currentTurn: curr,
      board: currBoard
    })
  }

  render() {
    return (
      <div>
        <table>
          {this.state.board.map((row, i) =>
            <tr>
              {row.map((cell, j) =>
                <Cell display={cell} loc={[i,j]} board={this.state.board} swap={this.swapTurn.bind(this)} token={this.state.currentTurn}/>
              )}
            </tr>
          )}
        </table>
      </div>
    );
  }

}



ReactDOM.render(<App />, document.getElementById('app'))