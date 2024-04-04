create database Sesi
use Sesi

create table agendamento(
    id INT PRIMARY KEY IDENTITY,
    espaco VARCHAR(20) NOT NULL,
    data_ VARCHAR(10) NOT NULL,
    hora VARCHAR(5) NOT NULL,
    motivo VARCHAR(50) NOT NULL
)

select * from agendamento
insert into agendamento values('LMT','05-04-2024','8:40','Haverá pesquisa.')
insert into agendamento values('Biblioteca','06-04-2024','9:50','Haverá café literário.')
insert into agendamento values('Biblioteca','07-04-2024','10:40','Haverá debate.')
