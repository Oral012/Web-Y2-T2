export default function Entity({healthPT, Character}) {
  return (
    <>
      <section className="container">
        <h2>{Character} Health</h2>
        <div className="healthbar">
          <div style={{width: `${healthPT}%`}} className="healthbar__value"></div>
        </div>
      </section>
    </>
  );
}
