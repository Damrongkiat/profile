import topicban from "../Image/topicban.png";
import topicner from "../Image/topicner.png";

function TopicName(prop) {
  let color = (namecolor) => {
    switch (namecolor) {
      case "red":
        return "invert(12%) sepia(84%) saturate(7432%) hue-rotate(6deg) brightness(92%) contrast(127%)";
      case "green":
        return "invert(22%) sepia(99%) saturate(1889%) hue-rotate(101deg) brightness(102%) contrast(104%)";
      case "blue":
        return "invert(8%) sepia(100%) saturate(6401%) hue-rotate(247deg) brightness(99%) contrast(145%)";
      case "yellow":
        return "invert(88%) sepia(67%) saturate(3897%) hue-rotate(0deg) brightness(103%) contrast(100%)";
      case "purple":
        return "invert(21%) sepia(45%) saturate(4723%) hue-rotate(285deg) brightness(67%) contrast(124%)";
      case "orange":
        return "invert(62%) sepia(75%) saturate(1707%) hue-rotate(360deg) brightness(102%) contrast(106%)";

      default:
        return "invert(12%) sepia(84%) saturate(7432%) hue-rotate(6deg) brightness(92%) contrast(127%)";
    }
  };
  return (
    <div>
      <div className="topicbanner">
        <div>
          <img className="topicban" src={topicban} />
          <img
            className="topicner"
            src={topicner}
            style={{ filter: color(prop.namecolor) }}
          />
        </div>
        <div className="topicname">
          <h6>{prop.name}</h6>
        </div>
      </div>
    </div>
  );
}
export default TopicName;
