import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Services.css';
import { images } from '../images/images';

const Services = () => {
  return (
    <div className="services">
      <h1 className="title">Nasze usługi</h1>
      <p className="subtitle">Oferujemy wiele usług związanych z naprawą i wsparciem technicznym Twojego urządzenia mobilnego.<br/> Zaloguj się i zgłoś usterkę swojego urządzenia. </p>
      <div className="services-container">

        <div className="service-item">
          <img src={images.screenRepairImg} alt="Wymiana ekranu" />
          <h2 className="service-title">Wymiana ekranu</h2>
          <p className="service-description">Jeśli Twój ekran został uszkodzony, wymienimy go na nowy i sprawimy, że Twój telefon będzie działał jak nowy.</p>
          <p className="service-time">Czas realizacji: 1-2 tygodnie</p>
          <p className="service-price">Cena: 49,99zł</p>
          <Link to="/contacts" className="button mx-auto">Zadzwoń teraz</Link>
        </div>

        <div className="service-item">
          <img src={images.softwareUpdateImg} alt="Aktualizacja oprogramowania" />
          <h2 className="service-title">Aktualizacja oprogramowania</h2>
          <p className="service-description">Jeśli potrzebujesz aktualizacji oprogramowania, pomożemy Ci zaktualizować system operacyjny i aplikacje na Twoim urządzeniu.</p>
          <p className="service-time">Czas realizacji: 2-3 tygodnie</p>
          <p className="service-price">Cena: 79,99zł</p>
          <Link to="/contacts" className="button mx-auto">Zadzwoń teraz</Link>
        </div>

        <div className="service-item">
          <img src={images.batteryReplacementImg} alt="Wymiana baterii" />
          <h2 className="service-title">Wymiana baterii</h2>
          <p className="service-description">Jeśli Twój telefon działa zbyt krótko na jednym ładowaniu, wymienimy baterię na nową i przywrócimy pełną funkcjonalność Twojego urządzenia.</p>
          <p className="service-time">Czas realizacji: 3-4 tygodnie</p>
          <p className="service-price">Cena: 129,99zł</p>
          <Link to="/contacts" className="button mx-auto">Zadzwoń teraz</Link>
        </div>

        <div className="service-item">
          <img src={images.waterDamageImg} alt="Wodoodporność" />
          <h2 className="service-title">Wodoodporność</h2>
          <p className="service-description">Jeśli chcesz zabezpieczyć swój telefon przed zalaniem lub uszkodzeniem w wyniku kontaktu z wodą, możemy zabezpieczyć go przed wodą.</p>
          <p className="service-time">Czas realizacji: 1 tydzień</p>
          <p className="service-price">Cena: 89,99zł</p>
          <Link to="/contacts" className="button mx-auto">Zadzwoń teraz</Link>
        </div>

        <div className="service-item">
          <img src={images.malwareRemovalImg} alt="Usuwanie wirusów i malware" />
          <h2 className="service-title">Usuwanie wirusów i malware</h2>
          <p className="service-description">Jeśli Twój telefon jest zainfekowany wirusami lub malwarem, możemy przeskanować i usunąć złośliwe oprogramowanie.</p>
          <p className="service-time">Czas realizacji: 2-3 tygodnie</p>
          <p className="service-price">Cena: 39,99zł</p>
          <Link to="/contacts" className="button mx-auto">Zadzwoń teraz</Link>
        </div>

        <div className="service-item">
          <img src={images.chargingPortImg} alt="Naprawa portu ładowania" />
          <h2 className="service-title">Naprawa portu ładowania</h2>
          <p className="service-description">Jeśli Twój telefon nie ładuje się poprawnie lub trzeba przyciskać kabel ładowarki, możemy naprawić port ładowania.</p>
          <p className="service-time">Czas realizacji: 2 tygodnie</p>
          <p className="service-price">Cena: 99,99zł</p>
          <Link to="/contacts" className="button mx-auto">Zadzwoń teraz</Link>
        </div>

        <div className="service-item">
          <img src={images.cameraRepairImg} alt="Naprawa aparatu" />
          <h2 className="service-title">Naprawa aparatu</h2>
          <p className="service-description">Jeśli Twój aparat nie działa poprawnie lub zdjęcia wychodzą niewyraźne, możemy naprawić aparat.</p>
          <p className="service-time">Czas realizacji: 4 tygodnie</p>
          <p className="service-price">Cena: 59,99zł</p>
          <Link to="/contacts" className="button mx-auto">Zadzwoń teraz</Link>
        </div>

        <div className="service-item">
          <img src={images.dataRestoreImg} alt="Odzyskiwanie danych" />
          <h2 className="service-title">Odzyskiwanie danych</h2>
          <p className="service-description">Jeśli utraciłeś dane z powodu awarii urządzenia lub usunięcia przez przypadek, możemy pomóc w odzyskaniu utraconych danych.</p>
          <p className="service-time">Czas realizacji: 2-3 tygodnie</p>
          <p className="service-price">Cena: 139,99zł</p>
          <Link to="/contacts" className="button mx-auto">Zadzwoń teraz</Link>
        </div>

        <div className="service-item">
          <img src={images.audioPortFixImg} alt="Naprawa wejścia słuchawkowego" />
          <h2 className="service-title">Naprawa wejścia słuchawkowego</h2>
          <p className="service-description">Jeśli wejście słuchawkowe w Twoim urządzeniu nie działa poprawnie, możemy naprawić usterkę.</p>
          <p className="service-time">Czas realizacji: 3-4 tygodnie</p>
          <p className="service-price">Cena: 69,99zł</p>
          <Link to="/contacts" className="button mx-auto">Zadzwoń teraz</Link>
        </div>

        <div className="service-item">
          <img src={images.speakerFixImg} alt="Naprawa głośnika" />
          <h2 className="service-title">Naprawa głośnika</h2>
          <p className="service-description">Jeśli Twój głośnik działa nieprawidłowo lub nie działa w ogóle, możemy naprawić usterkę.</p>
          <p className="service-time">Czas realizacji: 1 tydzień</p>
          <p className="service-price">Cena: 99,99zł</p>
          <Link to="/contacts" className="button mx-auto">Zadzwoń teraz</Link>
        </div>

        <div className="service-item">
          <img src={images.microphoneFixImg} alt="Naprawa mikrofonu" />
          <h2 className="service-title">Naprawa mikrofonu</h2>
          <p className="service-description">Jeśli Twój mikrofon działa nieprawidłowo lub nie działa w ogóle, możemy naprawić usterkę.</p>
          <p className="service-time">Czas realizacji: 4 tygodnie</p>
          <p className="service-price">Cena: 89,99zł</p>
          <Link to="/contacts" className="button mx-auto">Zadzwoń teraz</Link>
        </div>

      </div>
    </div>
 
  );
};

export default Services;