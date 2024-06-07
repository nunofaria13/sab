/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.fpb.pt/calendario/clube_3488/?clube=3488&epoca=2023/2024&';

async function extrairDados() {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const jogos = [];
        $('.table_class tr').each((index, element) => {
            const colunas = $(element).find('td');
            if (colunas.length) {
                const jogo = {
                    data: $(colunas[0]).text().trim(),
                    hora: $(colunas[1]).text().trim(),
                    equipa_casa: $(colunas[2]).text().trim(),
                    equipa_fora: $(colunas[3]).text().trim(),
                    resultado: $(colunas[4]).text().trim()
                };
                jogos.push(jogo);
            }
        });

        return jogos;
    } catch (error) {
        console.error(`Falha ao acessar a página: ${error}`);
        return [];
    }
}

module.exports = extrairDados;
