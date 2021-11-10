import react, { useState } from "react";
import { Statistics } from "./components/Statiscs/Statistics"
import { FeedbackOptions} from './components/FeedbackOptions/FeedbackOptions'
import { Section } from "./components/Section/Section"

function App() {
  const [goodPoints, setGoodPoints] = useState(0)
  const [neutralPoints, setNeutralPoints] = useState(0)
  const [badPoints, setBedPoints] = useState(0)

  const countTotalFeedback = () => (
    goodPoints + neutralPoints + badPoints
  )
  const countPositiveFeedbackPercentage = () => (
    Math.floor(goodPoints * 100 / countTotalFeedback())
  )
  const handlerGood = () => {
    setGoodPoints(prev => {
     return prev + 1
   })
  };
  const handlerNeutral = () => {
    setNeutralPoints(prev => {
     return prev + 1
   })
  }
  const handlerBad = () => {
    setBedPoints(prev => {
     return prev + 1
   })
  }
  return ( <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onHandleGood={handlerGood}
            onHandleNeutral={handlerNeutral}
            onHandleBad={handlerBad}
          />

          <Statistics
            good={goodPoints}
            neutral={neutralPoints}
            bad={badPoints}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
          {/* <Notification message="No feedback given"></Notification> */}
        </Section>
      </div> );
}
export default App;
// class App extends Component {
//   state = {
//     goodPoints: 0,
//     neutralPoints: 0,
//     badPoints: 0 
//   }
  // countTotalFeedback = () => (
  //   this.state.goodPoints + this.state.neutralPoints + this.state.badPoints
  // )
  // countPositiveFeedbackPercentage = () => (
  //   Math.floor(this.state.goodPoints * 100 / this.countTotalFeedback())
  // )
  // handlerGood = () => {
  //   this.setState((prevState) => {
  //     // console.log(this.state)
  //     return {
  //       goodPoints: prevState.goodPoints + 1,
  //     };
  //   });
  // };
  // handlerNeutral = () => {
  //   this.setState((prevState) => {
  //     return {
  //       neutralPoints: prevState.neutralPoints + 1
  //     }
  //   })
  // }
  // handlerBad = () => {
  //   this.setState((prevState) => {
  //     return {
  //       badPoints : prevState.badPoints + 1
  //     }
  //   })
  // }
//   render() {
  // return (
    
  //   <div>
  //     <Section title="Please leave feedback">
  //     <FeedbackOptions
  //       onHandleGood={ this.handlerGood}
  //       onHandleNeutral={ this.handlerNeutral}
  //       onHandleBad={this.handlerBad }
  //     />

  //     <Statistics
  //       good={this.state.goodPoints}
  //       neutral={this.state.neutralPoints}
  //       bad={this.state.badPoints}
  //       total={this.countTotalFeedback ()}
  //       positivePercentage={this.countPositiveFeedbackPercentage()}
  //       />
  //       {/* <Notification message="No feedback given"></Notification> */}
  //     </Section>
  //   </div>

  // );
// }
// }
// export default App;




