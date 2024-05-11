import React from 'react';
import '../CSS/Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="title">Witaj w naszym serwisie wsparcia technicznego urządzeń mobilnych</h1>
      <p className="subtitle">Znajdziesz tutaj pomoc w rozwiązywaniu problemów z Twoim urządzeniem mobilnym, takimi jak: problemy z systemem, baterią, aplikacjami i innymi.</p>
      <p className="subtitle">Jesteśmy firmą zajmującą się naprawą i wsparciem technicznym urządzeń mobilnych. Nasz zespół składa się z doświadczonych specjalistów, którzy są w stanie szybko i skutecznie rozwiązać problemy z Twoim urządzeniem.</p>
      <div className="btn-hero-container">
      <Link to="/contacts">
        <button className="button">Skontaktuj się z nami</button>
      </Link>
      <Link to="/Faq">
        <button className="button">Często zadawne pytania</button>
      </Link>
      </div>
      <Link to="/Review">
        <button className="button">Opinie</button>
      </Link>
      <p className="title">Dlaczego warto wybrać nasz serwis?</p>
      <div className="why-choose-us">
        <div>
          <ul className="table">
            <li className="table-row">
              <span className="table-cell">Oferujemy szybką i skuteczną naprawę urządzeń mobilnych</span>
            </li>
            <li className="table-row">
              <span className="table-cell">Posiadamy duże doświadczenie w naprawie różnych modeli telefonów</span>
            </li>
            <li className="table-row">
              <span className="table-cell">Gwarantujemy atrakcyjne ceny oraz korzystne warunki naprawy</span>
            </li>
            <li className="table-row">
              <span className="table-cell">Zapewniamy wysoką jakość usług oraz pełne zadowolenie klientów</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
