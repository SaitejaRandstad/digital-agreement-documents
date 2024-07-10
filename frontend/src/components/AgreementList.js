import React, { useState, useEffect } from 'react';

const AgreementList = () => {
  const [agreements, setAgreements] = useState([]);

  useEffect(() => {
    const fetchAgreements = async () => {
      const response = await fetch('http://127.0.0.1:8000/agreements/');
      const data = await response.json();
      setAgreements(data);
    };

    fetchAgreements();
  }, []);

  return (
    <div>
      <h2>Agreements</h2>
      <ul>
        {agreements.map((agreement) => (
          <li key={agreement.id}>
            <h3>{agreement.client_name}</h3>
            <p>{agreement.agreement_date}</p>
            <p>{agreement.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgreementList;
