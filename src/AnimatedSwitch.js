import {Switch} from 'react-router-dom'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {withRouter} from 'react-router-dom'

function AnimatedSwitch(props) {
  return(
    <TransitionGroup exit={false}> {/* Disabling exit animations makes transitions cleaner */}
      {/* Timeout must be the same as in CSS (see AnimatedSwitch transitions section) */}
      <CSSTransition key={props.location.key} classNames="route" timeout={200} appear>
        <Switch location={props.location}>
          {props.children}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default withRouter(AnimatedSwitch)
