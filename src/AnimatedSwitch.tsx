import { ReactNode } from "react";
import { Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface Props {
  children: readonly ReactNode[];
}

export default function AnimatedSwitch(props: Props) {
  const location = useLocation();
  return (
    <TransitionGroup exit={false}>
      {" "}
      {/* Disabling exit animations makes transitions cleaner */}
      {/* Timeout must be the same as in CSS (see AnimatedSwitch transitions section) */}
      <CSSTransition key={location.key} classNames="route" timeout={200} appear>
        <Routes location={location}>{props.children}</Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
