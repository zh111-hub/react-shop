function Services() {
  const products = [
    "Ауа қуырғыш",
    "Шаңсорғыш",
    "Кофеқайнатқыш",
    "Электр гриль",
    "Ас үй миксері",
    "Бумен тазалағыш"
  ];

  return (
    <section className="services" id="services">
      <h2>Біздің тауарлар</h2>

      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <h3>{product}</h3>
            <p>Сапалы әрі заманауи техника.</p>
            <button>Толығырақ</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;