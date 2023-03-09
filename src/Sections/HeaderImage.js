import headerbg from "../Image/head.jpg";
export default function HeaderImage() {
  return (
    <div>
      <div className="headimage">
        <img src={headerbg} />
        <h1>Welcome</h1>
      </div>
    </div>
  );
}
