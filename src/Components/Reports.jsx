import React, { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import '../CSS/Reports.css';

const firebaseConfig = {
  apiKey: "AIzaSyDBaQNblsikvNXFNOcPWe18df4zPGIrdrA",
  authDomain: "swpssm2.firebaseapp.com",
  databaseURL: "https://swpssm2-default-rtdb.firebaseio.com",
  projectId: "swpssm2",
  storageBucket: "swpssm2.appspot.com",
  messagingSenderId: "405521605660",
  appId: "1:405521605660:web:9a46fed1961ac9507aebd9",
  measurementId: "G-P1M7J04B00"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const Reports = () => {
  const [reports, setReports] = useState([]);
  const [user, setUser] = useState(null);
  const [sortColumn, setSortColumn] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  useEffect(() => {
    const fetchReports = async () => {
      const reportsCollection = collection(db, 'zglos');
      const reportsSnapshot = await getDocs(reportsCollection);
      const reportsData = reportsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setReports(reportsData);
    };

    fetchReports();
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    return () => unsubscribe();
  }, []);

  const handleStatusChange = async (reportId, newStatus) => {
    if (!user) {
      console.log('User not authenticated');
      return;
    }

    try {
      const reportsDoc = doc(db, 'zglos', reportId);
      await updateDoc(reportsDoc, { stats: newStatus });
      setReports(prevReports => prevReports.map(report => report.id === reportId ? { ...report, stats: newStatus } : report));
      console.log('Report status updated successfully');
    } catch (error) {
      console.error('Error updating report status:', error);
    }
  };

  const sortedReports = reports.sort((a, b) => {
    const isAscending = sortDirection === 'asc' ? 1 : -1;
    const columnA = a[sortColumn];
    const columnB = b[sortColumn];

    if (columnA > columnB) {
      return isAscending;
    } else if (columnA < columnB) {
      return -isAscending;
    } else {
      return 0;
    }
  });

  return (
    <div className="reports">
      <h1 className="title">Zgłoszenia serwisowe</h1>
      <table className="table">
        <thead>
        <tr>
          <th aria-sort={sortColumn === 'stats' ? sortDirection === 'asc' ? 'ascending' : 'descending' : 'none'} onClick={() => handleSort('name')}>Status Usługi</th>
            <th aria-sort={sortColumn === 'name' ? sortDirection === 'asc' ? 'ascending' : 'descending' : 'none'} onClick={() => handleSort('name')}>Imię i Nazwisko</th>
            <th aria-sort={sortColumn === 'phone' ? sortDirection === 'asc' ? 'ascending' : 'descending' : 'none'} onClick={() => handleSort('phone')}>Telefon</th>
            <th aria-sort={sortColumn === 'email' ? sortDirection === 'asc' ? 'ascending' : 'descending' : 'none'} onClick={() => handleSort('email')}>E-mail</th>
            <th aria-sort={sortColumn === 'device' ? sortDirection === 'asc' ? 'ascending' : 'descending' : 'none'} onClick={() => handleSort('device')}>Urządzenie</th>
            <th aria-sort={sortColumn === 'problemDescription' ? sortDirection === 'asc' ? 'ascending' : 'descending' : 'none'} onClick={() => handleSort('problemDescription')}>Opis problemu</th>
          </tr>
        </thead>
        <tbody>
        {sortedReports.map(report => (
            <tr key={report.id}>
              <td>
                {user ? (
                  <select value={report.stats} onChange={e => handleStatusChange(report.id, e.target.value)}>
                    <option value="Sprzęt odebrany od klienta">Sprzęt odebrany od klienta</option>
                    <option value="W trakcie realizacji">W trakcie realizacji</option>
                    <option value="Zakończone - urządzenie wysyłane do klienta">Zakończone - urządzenie wysyłane do klienta</option>
                    <option value="Zakończone - sprzęd odebrany przez klienta">Zakończone - sprzęd odebrany przez klienta</option>
                  </select>
                ) : (
                  report.stats
                )}
              </td>
              <td>{report.name}</td>
              <td>{report.phone}</td>
              <td>{report.email}</td>
              <td>{report.device}</td>
              <td>{report.problemDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;