import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  constructor(props) {
    super(props)
    console.log('constructor executed.........................')
    this.state = {isDark: true, count: 0}
  }

  onClickToggle = () => {
    this.setState(preState => ({
      isDark: !preState.isDark,
      count: preState.count + 1,
    }))
  }

  render() {
    const {isDark, count} = this.state
    console.log(
      `render Executed...............${
        count === 0 ? 'initial starting Dark' : count
      }.....................`,
    )
    return (
      <div className="page">
        <div className={`card ${isDark ? 'dark' : 'light'}`}>
          <h1>Click to Change Mode</h1>
          <button onClick={this.onClickToggle} className="button" type="button">
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

//   render() {
//     const {isDark} = this.state
//     return (
//       <div className="page">
//         {isDark ? (
//           <div className="card dark">
//             <h1>Click to Change Mode</h1>
//             <button
//               onClick={this.onClickToggle}
//               className="button"
//               type="button"
//             >
//               Light Mode
//             </button>
//           </div>
//         ) : (
//           <div className="card light">
//             <h1>Click to Change Mode</h1>
//             <button
//               onClick={this.onClickToggle}
//               className="button"
//               type="button"
//             >
//               Dark Mode
//             </button>
//           </div>
//         )}
//       </div>
//     )
//   }
