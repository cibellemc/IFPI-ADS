import React, { useState } from 'react';
import InputBox from "@/components/Input";
import SelectionBox from "@/components/SelectionBox";
import SubmitForm from "@/components/Submit";
import axios from 'axios';

export default function Home() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  /*const [tipoConta, setTipoConta] = useState('');
  const [limiteChequeEspecial, setLimiteChequeEspecial] = useState('');
  const [taxaRendimento, setTaxaRendimento] = useState('');*/

  const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    // Verifique se os campos obrigatórios estão preenchidos
    if (!nome || !cpf || !email) {
      console.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
  
    // Crie o objeto user com os campos obrigatórios
    const user = { nome, cpf, email};
    
    /*
    const user = { nome, cpf, email, tipoConta, limiteChequeEspecial, taxaRendimento };
    
    if (tipoConta === 'corrente') {
      user.limiteChequeEspecial = limiteChequeEspecial;
    } else if (tipoConta === 'poupanca') {
      user.taxaRendimento = taxaRendimento;
    }
    */
  
    try {
      const response = await axios.post('http://localhost:3000/users', user);
      console.log('Usuário cadastrado:', response.data);
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };
  
    /*<SelectionBox 
    setTipoConta={setTipoConta}
    setLimiteChequeEspecial={setLimiteChequeEspecial}
    setTaxaRendimento={setTaxaRendimento} />        
    <SubmitForm />*/

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
