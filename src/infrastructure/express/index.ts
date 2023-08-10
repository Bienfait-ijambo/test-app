import express from 'express';
import { initDbConnection } from '../typeorm';
import { createUser } from '../../api/User/entity/User';


const app= express();
app.enable('trust proxy')

app.get('/', function (req, res) {
    res.send('-L flaf means legacy modes( use it when we are working in mixed environments !')
  })

 


  app.get('/todos', function (req, res) {
    console.log('I get it !')
    res.send({
      id:1,
      name:"to code"
    })
  })



app.get('/user',async (req,res)=>{
   await createUser()
   res.send({message: 'user-created !'})
})

const PORT=4000


const bootstrap=async ()=>{

    await initDbConnection()
    console.log(process.env.POSTGRES_PASSWORD)

    app.listen(PORT,()=>console.log(`server is running at localhost:${PORT}`));
}


// "POSTGRES_PASSWORD=090912",
// "POSTGRES_DB=test_app",
// "POSTGRES_USER=postgres",
// 172.23.0.2

bootstrap()
