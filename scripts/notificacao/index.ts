import { Email, SMS, Android } from "./classes/MeiosDeNotificacao"

new Email().enviar ({
    nome: "João",
    email: "joao@gmail.com",
    telefone: "4799859453"
}) 

new SMS().enviar ({
    nome: "João",
    email: "joao@gmail.com",
    telefone: "4799859453"
}) 

new Android().enviar ({
    nome: "João",
    email: "joao@gmail.com",
    telefone: "4799859453",
    idAndroid: "teste para enviar via Android"
}) 
