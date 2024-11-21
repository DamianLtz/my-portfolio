const scrollToTop = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
): void => {
  e.preventDefault();
  window.scrollTo(0, 0);
};

const scrollToContact = () => {
  return window.scrollTo(0, 10000);
};

const scrollToProyects = () => {
  if (window.screen.width <= 991) {
    window.scrollTo(0, 625);
  } else if (window.screen.width <= 1272) {
    window.scrollTo(0, 700);
  } else {
    window.scrollTo(0, 900);
  }
};

export { scrollToTop, scrollToContact, scrollToProyects };
