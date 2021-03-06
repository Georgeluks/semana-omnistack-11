import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';


export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId, 
                }
            });

            history.push('/profile');

        } catch (e) {
            alert(`Erro ao cadastrar novo caso: ${e}`);
        }

    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Faca seu Cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color='#e02041' />
                        Voltar para home
                    </Link>
                
                </section>

                <form onSubmit={handleNewIncident}>
                     <input 
                     placeholder="Titulo do Caso"
                     value={title}
                     onChange={ e=> setTitle(e.target.value)}
                     />
                     <textarea 
                     placeholder="Descricao"
                     value={description}
                     onChange={ e=> setDescription(e.target.value)}
                     />
                     <input 
                     placeholder="Valor em Reais"
                     value={value}
                     onChange={ e=> setValue(e.target.value)}
                     />

                     <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}