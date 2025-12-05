import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

//Dossier statique
app.use(express.static(path.join(__dirname, 'src')))

//Dossier Asset
app.use('/Asset', express.static(path.join(__dirname, 'Asset')));

app.get('/', (req, res)=>{res.sendFile(path.join(__dirname, 'src', 'index.html'));});

app.listen(PORT, () => {
    console.log(`Serveur en cours sur http://localhost:${PORT}`);
});                          