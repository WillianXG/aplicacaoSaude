import os
import csv
from datetime import datetime, date

class Pesquisa:
    def __init__(self):
        self.perguntas = [
            "Você pratica atividade física regularmente?",
            "Você consome pelo menos 5 porções de frutas e vegetais por dia?",
            "Você costuma dormir pelo menos 7 horas por noite?",
            "Você fuma atualmente?"
        ]
        self.respostas = []
        self.data_nascimento = None
        self.idade = None
        self.genero = None

    def calcular_idade(self, data_nascimento):
        hoje = date.today()
        if data_nascimento > hoje:
            raise ValueError("A data do nascimento não pode ser no futuro.")
        
        ano_nascimento = data_nascimento.year
        mes_nascimento = data_nascimento.month
        dia_nascimento = data_nascimento.day
        idade = hoje.year - ano_nascimento - ((hoje.month, hoje.day) < (mes_nascimento, dia_nascimento))
        
        return idade

    def salvar_respostas(self):
        # Obtém data e hora atual
        data_atual = datetime.now().strftime('%d/%m/%Y')
        hora_atual = datetime.now().strftime('%H:%M:%S')

        # Lista de títulos das colunas (incluindo as perguntas e a data de nascimento)
        titulos = ['Data de Nascimento (DD/MM/AAAA)', 'Idade', 'Gênero'] + self.perguntas + ['Data', 'Hora']

        # Lista de dados a serem gravados no arquivo CSV
        dados = [self.data_nascimento.strftime('%d/%m/%Y'), self.idade, self.genero] + self.respostas + [data_atual, hora_atual]

        # Verifica se o arquivo já existe
        arquivo_existe = os.path.exists('dados_pesquisa.csv')

        # Escreve os dados no arquivo CSV 
        with open('dados_pesquisa.csv', 'a', newline='') as arquivo_csv:
            escritor_csv = csv.writer(arquivo_csv)
            # Se o arquivo não existir, escreve os títulos
            if not arquivo_existe:
                escritor_csv.writerow(titulos)
            escritor_csv.writerow(dados)
