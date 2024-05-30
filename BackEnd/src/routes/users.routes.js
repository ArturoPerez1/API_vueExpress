import { Router } from "express";
import {pool} from '../db.js'

const router = Router();

router.get('/users', async (req , res)=>{
    const {rows}  = await pool.query('select id, nombre, apellido from persona order by id');
    res.json(rows);
})

router.get('/users/:id', async (req , res)=>{
    const {id} = req.params;
    const {rows}  = await pool.query('select id, nombre, apellido from persona where id = $1', [id]);
    if(rows.length === 0){
        return res.status(404).json({message:"user not found"})
    } 
    res.json(rows[0]);
})

router.post('/users', async (req , res)=>{
    const {name, lastName} = req.body;
    const {rows} = await pool.query('insert into persona (nombre, apellido) values ($1,$2) RETURNING *', [name, lastName]);
    res.json({message: 'User Created', user: rows[0]})
})

router.delete('/users/:id', async (req , res)=>{
    const {id} = req.params;
    const {rows,rowCount}  = await pool.query('delete from persona where id = $1 RETURNING *', [id]);
    if(rowCount === 0){
        return res.status(404).json({message:"user not found"})
    } 
    res.json({message: 'User Delete', user: rows[0]});
})

router.put('/users/:id',async (req , res)=>{
    const {name, lastName} = req.body;
    const {id} = req.params;
    const {rows}  = await pool.query('update persona  set (nombre, apellido) = ($2,$3) where id = $1 RETURNING *', [id, name, lastName]);
    res.json({message: 'User Updated', user: rows[0]});
})


export default router