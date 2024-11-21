import express from 'express'; 
import cors from 'cors';

const app = express();
const port = 3001;


app.use(cors());



app.get('/', (req, res) => {
  res.send('Hello World!');
});

const notifications = {
    network: 7,
    jobs: 8,
    messaging: 7,
    notifications: 5
}


app.get('/notifications',(req,res)=>{
    res.json(notifications)

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});