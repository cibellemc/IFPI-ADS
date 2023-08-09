import React, { useState } from 'react';

export default function SelectionBox(){

      const [tipoConta, setTipoConta] = useState('');
      const [limiteChequeEspecial, setLimiteChequeEspecial] = useState('');
      const [taxaRendimento, setTaxaRendimento] = useState('')

    return (
        <div>

            <div className="flex flex-col gap-1">
                <span>Tipo de conta</span>

                <select value={tipoConta}
                 className="text-black"
                 onChange={(e) => setTipoConta(e.target.value)}>
                    <option value="comum">Comum</option>
                    <option value="corrente">Corrente</option>
                    <option value="poupanca">Poupança</option>
                </select>

                {tipoConta === 'corrente' && (
                    <div className="flex flex-col gap-1">
                        <span>Limite do Cheque Especial:</span>
                        <input
                            type="number"
                            value={limiteChequeEspecial}
                            onChange={(event) => setLimiteChequeEspecial(event.target.value)}
                        />
                    </div>
                )}

                {tipoConta === 'poupanca' && (
                        <div className="flex flex-col gap-1">
                            <span>Taxa de Rendimento (em decimal):</span>
                            <input
                                type="number"
                                step="0.01"
                                value={taxaRendimento}
                                onChange={(event) => setTaxaRendimento(event.target.value)}
                            />
                        </div>
                    )}

                    {tipoConta === 'comum' && (
                        <div></div>
                    )}    
            </div>
        </div>
    )
}
