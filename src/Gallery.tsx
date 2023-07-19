import { Dispatch, SetStateAction, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useHotkey } from "@react-hook/hotkey";
import { useWindowSize } from "@react-hook/window-size";
import { CarouselProvider, Dot, DotGroup, Image, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Preview } from "./Previews";
import { setScrollingEnabled } from "./Utilities";

interface Props {
  preview: Preview;
  setMenuHidden: Dispatch<SetStateAction<boolean>>;
}

export default function Gallery(props: Props) {
  const [width, height] = useWindowSize();
  const location = useLocation();
  const navigate = useNavigate();

  // Hide the main menu and disable scrolling on mount, do the opposite on unmount
  useEffect(() => {
    props.setMenuHidden(true);
    setScrollingEnabled(false);
    return () => {
      props.setMenuHidden(false);
      setScrollingEnabled(true);
    };
  });

  // Operate the gallery via keyboard shortcuts
  const close = () => {
    // Location key is "default" on the initial load only, so we can use it to decide whether to go back in
    // history or explicitly navigate to the parent page. In the first case the scrolling position is kept,
    // while in the second it is ignored.
    if (location.key !== "default") navigate(-1);
    else navigate("/");
  };
  useHotkey(document, "esc", close);

  const backButton = "back-button";
  useHotkey(document, "arrowleft", () => {
    document.getElementById(backButton)?.click();
  });

  const nextButton = "next-button";
  useHotkey(document, "arrowright", () => {
    document.getElementById(nextButton)?.click();
  });

  // Should be somewhat greater than the --aspect-ratio CSS variable
  const carouselClassName = width / height > 1.7 ? "horizontal" : "vertical";
  return (
    <CarouselProvider
      className={carouselClassName}
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      isIntrinsicHeight
      hasMasterSpinner
      totalSlides={props.preview.slides.length}
    >
      <ButtonBack id={backButton} className={backButton}>
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </ButtonBack>
      <div className="gallery">
        <Slider className="slider">
          {props.preview.slides.map((slide, i) => (
            <Slide key={i} index={i} className="slide">
              <Image src={`/projects/${props.preview.url}/${slide}`} hasMasterSpinner />
            </Slide>
          ))}
        </Slider>
        <DotGroup
          className="dot-group"
          renderDots={(props) => {
            /* eslint-disable @typescript-eslint/no-non-null-assertion */
            const currentSlide = props.currentSlide!;
            const totalSlides = props.totalSlides!;
            const visibleSlides = props.visibleSlides!;
            /* eslint-enable @typescript-eslint/no-non-null-assertion */

            const dots = [];
            for (let i = 0; i < totalSlides; i += 1) {
              const multipleSelected = i >= currentSlide && i < currentSlide + visibleSlides;
              const singleSelected = i === currentSlide;
              const selected = props.showAsSelectedForCurrentSlideOnly ? singleSelected : multipleSelected;
              const slide = i >= totalSlides - visibleSlides ? totalSlides - visibleSlides : i;
              dots.push(
                <Dot key={i} slide={slide} disabled={props.disableActiveDots ? selected : false}>
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  </svg>
                </Dot>,
              );
            }
            return dots;
          }}
        />
      </div>
      <ButtonNext id={nextButton} className={nextButton}>
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </ButtonNext>
      <button id="close-button" onClick={close}>
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </CarouselProvider>
  );
}
