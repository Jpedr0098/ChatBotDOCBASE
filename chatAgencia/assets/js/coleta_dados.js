const spreadsheetId = '1fqpEX6LAP-f2EAI2Pzrje4UkFpO3ZrJZ3WCGu_vVrG4';  // ID correto da planilha
const range = 'BASE';  // Nome exato da aba

async function carregarDados() {
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?alt=json&key=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`;

try {
    const response = await fetch(url);

    if (!response.ok) {
    throw new Error(`Erro: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const linhas = data.values;

    console.log(linhas)

} catch (error) {
    console.error('Erro ao carregar os dados:', error);
    alert(`Erro ao carregar dados: ${error.message}`);
} finally {
    console.log("Concluido")
}
}