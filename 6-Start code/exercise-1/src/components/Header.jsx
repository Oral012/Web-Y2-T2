export default function Header({img, name}) {
  return (
    <header id="header">
      <img src={img} alt="PN Logo" />
      <h1>Students results for {name}</h1>
    </header>
  );
}
