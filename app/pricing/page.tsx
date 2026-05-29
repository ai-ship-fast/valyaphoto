import type { Metadata } from 'next';
import CtaBlock from '@/components/CtaBlock';
import TgButton from '@/components/TgButton';

export const metadata: Metadata = {
  title: 'Стоимость — Валентина Головко',
};

export default function PricingPage() {
  return (
    <main className="page">
      <section className="wrap phero">
        <div>
          <div className="crumb">Стоимость съёмки</div>
          <h1>Стоимость</h1>
        </div>
        <p>
          Ниже — базовые пакеты. Точная стоимость зависит от формата, локации и
          хронометража — всё обсуждаем индивидуально.
        </p>
      </section>

      <section className="wrap">
        <div className="price-grid">
          <div className="plan">
            <div className="pname">Базовый</div>
            <div className="pprice">8 000 ₽</div>
            <div className="pdur">1 час съёмки</div>
            <ul>
              <li>Одна локация</li>
              <li>15 обработанных фото</li>
              <li>Все удачные кадры без обработки</li>
              <li>Срок отдачи — до 7 дней</li>
              <li>Галерея онлайн</li>
            </ul>
            <TgButton label="Выбрать пакет" ghost />
          </div>

          <div className="plan feat">
            <div className="badge">Чаще выбирают</div>
            <div className="pname">Оптимальный</div>
            <div className="pprice">15 000 ₽</div>
            <div className="pdur">2–3 часа съёмки</div>
            <ul>
              <li>До двух локаций</li>
              <li>40 обработанных фото</li>
              <li>Все удачные кадры без обработки</li>
              <li>Помощь с образом и идеей</li>
              <li>Срок отдачи — до 10 дней</li>
            </ul>
            <TgButton
              label="Выбрать пакет"
              style={{ background: 'var(--paper)', color: 'var(--ink)' }}
            />
          </div>

          <div className="plan">
            <div className="pname">Свадебный день</div>
            <div className="pprice">
              <small>от </small>30 000 ₽
            </div>
            <div className="pdur">от 4 часов</div>
            <ul>
              <li>Сборы → церемония → прогулка</li>
              <li>От 150 обработанных фото</li>
              <li>Предварительная встреча</li>
              <li>Помощь с таймингом дня</li>
              <li>Срок отдачи — до 3 недель</li>
            </ul>
            <TgButton label="Обсудить свадьбу" ghost />
          </div>
        </div>
        <p className="note">
          Нужен другой формат или объём? Напишите в Telegram — соберём
          индивидуальное предложение.
        </p>
      </section>

      <CtaBlock
        title="Готовы обсудить?"
        text="Напишите, что планируете снять — подскажу пакет и свободную дату."
      >
        <TgButton label="Записаться на съёмку" />
      </CtaBlock>
    </main>
  );
}
