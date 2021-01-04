import {Switch} from 'react-router-dom'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {withRouter} from 'react-router-dom'

function AnimatedSwitch(props) {
  return(
    <TransitionGroup>
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
