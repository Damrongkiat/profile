export const SkillsImageList = [
  "Bootstrap",
  "CSS3",
  "Firebase",
  "HTML5",
  //"Java",
  "JavaScript",
  "MySQL",
  "PHP",
  "React",
];
function SkillsImage(param) {
  switch (param) {
    case "Bootstrap":
      return require("../Image/Skills-logo/Bootstrap Logo.svg").default;
    case "CSS3":
      return require("../Image/Skills-logo/CSS3 Logo.svg").default;
    case "Firebase":
      return require("../Image/Skills-logo/Firebase Logo.svg").default;
    case "HTML5":
      return require("../Image/Skills-logo/HTML5 Logo.svg").default;
    case "Java":
      return require("../Image/Skills-logo/Java Logo.svg").default;
    case "JavaScript":
      return require("../Image/Skills-logo/JavaScript Logo.svg").default;
    case "MySQL":
      return require("../Image/Skills-logo/MySQL Logo.svg").default;
    case "PHP":
      return require("../Image/Skills-logo/PHP Logo.svg").default;
    case "React":
      return require("../Image/Skills-logo/React Logo.svg").default;
  }
}

export default SkillsImage;
