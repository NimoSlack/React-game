class Team extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      shots: 0,
      score: 0,
    }

    this.shotSound = new Audio('./assets/audio/srb_fireball.wav')
    this.scoreSound = new Audio('./assets/audio/snb_1-up.wav')
  }

  shotHandler = () => {
    let score = this.state.score
    this.shotSound.play()

    if (Math.random() > 0.5) {
      score += 1

      setTimeout(() => {
      this.scoreSound.play()
    }, 100)
  }

    this.setState((state, props)=> ({
      shots: state.shots + 1,
      score
    }))
  }


  render() {
    let shotPercentageDiv

    if (this.state.shots) {
      const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)
      shotPercentageDiv = (
        <div>
          <strong>Shooting %: {shotPercentage}</strong>
        </div>
      )
  }


    return ( 
      <div className="Team">
        <h2>{this.props.name}</h2>

        <div className="identity">
          <img src={this.props.logo} alt="{this.props.name}" />
        </div>

        <div>
          <strong>Shots:</strong> {this.state.shots}
        </div>

        <div>
          <strong>Score:</strong> {this.state.score}
        </div>

        <div>
          <strong>Shooting %: {shotPercentage}</strong>
        </div>

        {shotPercentageDiv}

        <button onClick={this.shotHandler}>Shoot!</button>
      </div>
      )
    }
  }


  function Game(props) {
    return (
      <div className="Game">
        <h1>Welcome to {props.venue} </h1>
        <div className="stats">
          <Team
            name={props.visitingTeam.name}
            logo={props.visitingTeam.logoSrc}
          />
  
          <div className="versus">
            <h1>VS</h1>
          </div>
  
          <Team
            name={props.homeTeam.name}
            logo={props.visitingTeam.logoSrc}
          />
        </div>
      </div>
    )
  }

function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: './assets/images/racoon.png'
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: './assets/images/squirrel.png'
  }

  const bunnies = {
    name: 'Burlington Bunnies'
    logoSrc: '.assets/images/bunny.png'
  }

  const hounds = {
    name: 'Hammmond Hounds'
    logoSrc: '.assets/images/hound.png'
  }
  return (
    <div className="App">
      <Game venue="Union 525 Gem"
      homeTeam={squirrels}
      visitingTeam={raccoons}
      />
      <Game 
      venue="Wicker Park"
      homeTeam={bunnies}
      visitingTeam={hounds}
      />

    </div>
  )
}

//Render the application
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
