import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
// import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';

function ChamadoForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [descricao, setDescricao] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;

        });

        setScheduleItems(updatedScheduleItems);
    }

    // function handleCreateClass(e: FormEvent) {
    //     e.preventDefault();

    //     api.post('classes', {
    //         name,
    //         avatar,
    //         whatsapp,
    //         bio,
    //         subject,
    //         cost: Number(cost),
    //         schedule: scheduleItems
    //     }).then(() => {
    //         alert('Cadastro Criado Com Sucesso!');
    //         history.push('/');
    //     }).catch(() => {
    //         alert('Error');
    //     })
    // }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="OK! Entraremos em contato o mais rápido possível."
                description="Preencha seus dados de contato e descrição do serviço que você deseja."
            />


            <main>
                {/* <form onSubmit={handleCreateClass}> */}
                <form>
                    <fieldset>
                        <legend>Seus Dados</legend>

                        <Input
                            name="name"
                            label="Nome Completo"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                        <Input
                            name="email"
                            label="E-mail"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <Input
                            name="whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) => {
                                setWhatsapp(e.target.value)
                            }}
                        />
                        <Textarea
                            name="descricao"
                            label="Descrição"
                            value={descricao}
                            onChange={(e) => {
                                setDescricao(e.target.value)
                            }}
                        />
                    </fieldset>

                    {/* <fieldset>
                        <legend>Sobre a Aula</legend>

                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => {
                                setSubject(e.target.value)
                            }}
                            options={[
                                { value: "Artes", label: "Artes" },
                                { value: "Biologia", label: "Biologia" },
                                { value: "Geografia", label: "Geografia" },
                                { value: "Matematica", label: "Matematica" },
                                { value: "Ingles", label: "Ingles" },
                                { value: "Historia", label: "Historia" },
                                { value: "Fisica", label: "Fisica" },
                                { value: "Portugues", label: "Portugues" },
                                { value: "Quimica", label: "Quimica" },
                            ]}
                        />
                        <Input
                            name="cost"
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e) => {
                                setCost(e.target.value)
                            }}
                        />
                    </fieldset> */}

                    {/* <fieldset>
                        <legend>Horários Disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo Horario
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="weed_day"
                                        label="Dia Da Semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: "0", label: "Domingo" },
                                            { value: "1", label: "Segunda" },
                                            { value: "2", label: "Terça" },
                                            { value: "3", label: "Quarta" },
                                            { value: "4", label: "Quinta" },
                                            { value: "5", label: "Sexta" },
                                            { value: "6", label: "Sábado" },
                                        ]}
                                    />
                                    <Input
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            )
                        })}
                    </fieldset> */}

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Warning" />
                            Importante! <br />
                            Preencha Todos Os Dados
                        </p>
                        <button type="submit">
                            Enviar Chamado
                        </button>
                    </footer>
                </form>
            </main>
        </div>

    )
}

export default ChamadoForm;