
import express from 'express'
import sql from 'mssql'
import { sqlConfig } from './server.js';

const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();
const routes = express.Router()

routes.get('/', async (req, res)=>{
   try{
        const { recordset } =  await pool.query`select * from agendamento`
        return res.status(200).json(recordset)
   }
   catch(error){
        return res.status(501).json('ops...algo deu errado')
   }
})

routes.post('/agendamento/novo', async (req, res)=>{
    try{
        const { data, hora, motivo} = req.body;
        await pool.query`insert into agendamento values(${data},${hora},${motivo})`
        return res.status(201).json(`ok`)
    }
    catch(error){
        return res.status(501).json('erro ao inserir agendamento...')
    }
})

routes.delete('/agendamento/excluir/:id', async (req, res)=>{
    try {
        const { id } = req.params
        await pool.query`delete from agendamento where id = ${id}`
        return res.status(200).json('excluido!')
    } catch (error) {
        console.log(error)
        return res.status(501).json('erro ao excluir agendamento...')
    }
})

export default routes