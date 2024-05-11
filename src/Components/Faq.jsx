import React from 'react';
import '../CSS/Faq.css';

const Faq = () => {
  return (
    <div className="faq-container">
      <h2 className="title">FAQ</h2>
      <div className="faq-item">
        <h3 className="faq-question">Jak długo trwa naprawa sprzętu?</h3>
        <p className="faq-answer">Czas naprawy zależy od rodzaju uszkodzenia i naszego obłożenia. Zazwyczaj staramy się wykonać naprawę jak najszybciej i nie zajmuje to więcej niż kilka dni.</p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">Jakie formy płatności akceptujecie?</h3>
        <p className="faq-answer">Akceptujemy płatności gotówkowe oraz przelewy bankowe. Nie przyjmujemy płatności kartą.</p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">Czy udzielacie gwarancji na naprawy?</h3>
        <p className="faq-answer">Tak, udzielamy gwarancji na wykonane przez nas naprawy. Gwarancja obejmuje okres 3 miesięcy od daty naprawy.</p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">Czy jest możliwość otrzymania faktury za naprawę?</h3>
        <p className="faq-answer">Tak, wystawiamy faktury za wykonane przez nas usługi naprawy. Wystarczy poprosić o fakturę przy składaniu zamówienia.</p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">Czy muszę składać zamówienie online?</h3>
        <p className="faq-answer">Nie, możesz składać zamówienie przez telefon lub osobiście w naszym serwisie. Jednak zalecamy składanie zamówień online, ponieważ jest to wygodniejsze i szybsze.</p>
      </div>
    </div>
  );
}

export default Faq;
