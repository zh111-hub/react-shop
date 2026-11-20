function Main() {
  return (
    <main className="main" id="home">
      <h2>DSP TECH дүкеніне қош келдіңіз!</h2>

      <p>
        Біз сіздерге заманауи электроника мен
        сапалы тұрмыстық техниканы ұсынамыз.
      </p>

      <button onClick={() => document.getElementById("services").scrollIntoView()}>
        Тауарларды көру
      </button>
    </main>
  );
}

export default Main;