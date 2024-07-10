import React, { useState } from 'react';

const AgreementForm = () => {
  const [clientName, setClientName] = useState('');
  const [agreementDate, setAgreementDate] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/agreements/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_name: clientName,
        agreement_date: agreementDate,
        content: content,
      }),
    });
    if (response.ok) {
      alert('Agreement created successfully!');
      setClientName('');
      setAgreementDate('');
      setContent('');
    } else {
      alert('Failed to create agreement.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        placeholder="Client Name"
        required
      />
      <input
        type="date"
        value={agreementDate}
        onChange={(e) => setAgreementDate(e.target.value)}
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Agreement Content"
        required
      />
      <button type="submit">Create Agreement</button>
    </form>
  );
};

export default AgreementForm;
