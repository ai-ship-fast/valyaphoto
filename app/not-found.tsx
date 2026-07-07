import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="page">
      <section className="wrap notfound">
        <div className="crumb">Ошибка 404</div>
        <h1>Страница не найдена</h1>
        <p>
          Кажется, такой страницы нет или она переехала. Вернитесь на главную или
          загляните в одно из направлений съёмки.
        </p>
        <div className="actions">
          <Link className="btn" href="/">
            На главную
          </Link>
          <Link className="tlink" href="/pricing">
            Посмотреть стоимость
          </Link>
        </div>
      </section>
    </main>
  );
}
