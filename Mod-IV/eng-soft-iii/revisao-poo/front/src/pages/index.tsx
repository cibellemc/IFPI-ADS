import React, { useState } from 'react';
import InputBox from "@/components/Input";
import SelectionBox from "@/components/SelectionBox";
import SubmitForm from "@/components/Submit";

export default function Home() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log('Nome:', nome);
    console.log('CPF:', cpf);
    console.log('E-mail:', email);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Banco Cidama</h1>

      <form onSubmit={handleSubmit} className="w-[300px]">
        <InputBox nomeCampo="Nome" value={nome} onChange={handleNomeChange} />
        <InputBox nomeCampo="CPF" value={cpf} onChange={handleCpfChange} />
        <InputBox nomeCampo="E-mail" value={email} onChange={handleEmailChange} />
        <SelectionBox />
        <SubmitForm />
      </form>
    </div>
  );
}
