export const handleScrollTo = (elementName: string) => {
  console.log(elementName)
  const element = document.getElementById(elementName);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};
