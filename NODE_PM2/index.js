let express =  require('express')
let app = express()

app.get('/', (req,res) =>{
    console.log('Teeraphon Yingsua 5735512154')
    res.send('Teeraphon Yingsua 5735512154')
})

app.get('/crash', (req,res) => {
    console.log('Crash!!')
    res.send('Crash')
    process.exit(1)
})


app.listen(process.env.PORT,
    ()=>console.log('Server is running at ', process.env.PORT))