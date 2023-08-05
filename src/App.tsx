import { useState } from "react";
import { BrowserRouter as Router, Navigate, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import { HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import AnimatedSwitch from "./AnimatedSwitch";
import Contact from "./Contact";
import Menu from "./Menu";
import PageNotFound from "./PageNotFound";
import Previews from "./Previews";
import ScrollToTop from "./ScrollToTop";
import { updateTitle, withTracker } from "./Utilities";

// Load i18next instance for translations to work
import "./i18n";

interface Props {
  testMode?: boolean;
}

export interface Section {
  path: string;
  title: string;
  exact: boolean;
}

export default function App(props: Props) {
  const i18n = useTranslation()[1];
  const [menuHidden, setMenuHidden] = useState(false);

  // Initialize Google Analytics
  ReactGA.initialize("G-WCJ8J8DSM1", { testMode: props.testMode });

  // All website sections are defined below
  const sections: readonly Section[] = [
    {
      path: "interior-design",
      title: "Interior Design",
      exact: false,
    },
    {
      path: "contact",
      title: "Contact",
      exact: true,
    },
  ];

  const renderSection = (sectionPath: string) => {
    switch (sectionPath) {
      case "interior-design": {
        const PreviewsWithTracker = withTracker(Previews);
        return <PreviewsWithTracker setMenuHidden={setMenuHidden} />;
      }
      case "contact": {
        const ContactWithTracker = withTracker(Contact);
        return <ContactWithTracker />;
      }
      default:
        throw new Error(`Unexpected section path: ${sectionPath}`);
    }
  };

  const currentLanguage = i18n.language;
  return (
    <HelmetProvider>
      <Router>
        {updateTitle("")}
        <Menu sections={sections} hidden={menuHidden} />

        <ScrollToTop />
        <AnimatedSwitch>
          {
            // Client-side redirects kick in during local development and are meant as a backup
            // In production, when running on Apache HTTP Server, server-side redirects replace them, see .htaccess
          }
          <Route path="/" element={<Navigate replace to={`${currentLanguage}/${sections[0].path}/`} />} />
          <Route path={currentLanguage} element={<Navigate replace to={`${sections[0].path}/`} />} />
          {sections.map((section) => (
            <Route
              key={section.path}
              path={`${currentLanguage}/${section.path}/${section.exact ? "" : "*"}`}
              element={renderSection(section.path)}
            />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </AnimatedSwitch>
      </Router>
    </HelmetProvider>
  );
}
