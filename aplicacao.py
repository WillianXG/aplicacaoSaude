import tkinter as tk
from tkinter import messagebox
from pesquisa import Pesquisa
from datetime import datetime

class Aplicacao(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Pesquisa de Hábitos de Vida")
        self.pesquisa = Pesquisa()
        self.criar_interface()

    def obter_respostas(self):
        return [resposta.get() for resposta in self.respostas_var]

    def criar_interface(self):
        # Configurar pesos de coluna para tornar a interface responsiva
        self.grid_columnconfigure(0, weight=1)
        self.grid_columnconfigure(1, weight=1)
        self.grid_columnconfigure(2, weight=1)
        self.grid_columnconfigure(3, weight=1)

        tk.Label(self, text="Data de Nascimento (DD/MM/AAAA):").grid(row=0, column=0, sticky='w')
        self.data_nascimento_entry = tk.Entry(self)
        self.data_nascimento_entry.grid(row=0, column=1, columnspan=3, sticky='ew')

        tk.Label(self, text="Gênero:").grid(row=1, column=0, sticky='w')
        self.genero_var = tk.StringVar(value="Selecione seu gênero")  # Defina o valor inicial como None
        genero_options = [
            "Masculino",
            "Feminino",
            "Não binário",
            "Agênero",
            "Gênero fluido",
            "Bigênero",
            "Transgênero",
            "Intersexo",
            "Outro",
            "Prefiro não dizer"
        ]
        self.genero_dropdown = tk.OptionMenu(self, self.genero_var, *genero_options)
        self.genero_dropdown.grid(row=1, column=1, columnspan=3, sticky='ew')
        self.genero_dropdown.config(indicatoron=0)

        self.respostas_var = []
        for i, pergunta in enumerate(self.pesquisa.perguntas):
            tk.Label(self, text=pergunta).grid(row=i+2, column=0, sticky='w')
            resposta_var = tk.StringVar(value={None})  # Defina o valor inicial como vazio
            self.respostas_var.append(resposta_var)
            tk.Radiobutton(self, text="Sim", variable=resposta_var, value="Sim").grid(row=i+2, column=1, sticky='w')
            tk.Radiobutton(self, text="Não", variable=resposta_var, value="Não").grid(row=i+2, column=2, sticky='w')
            tk.Radiobutton(self, text="Não sei responder", variable=resposta_var, value="Não sei responder").grid(row=i+2, column=3, sticky='w')

        # Define o tamanho do botão "Salvar" para 20 caracteres
        tk.Button(self, text="Salvar", command=self.salvar_pesquisa, width=20).grid(row=len(self.pesquisa.perguntas)+3, column=0, columnspan=4, sticky='ew')

    def salvar_pesquisa(self):
        data_nascimento_str = self.data_nascimento_entry.get()
        try:
            self.pesquisa.data_nascimento = datetime.strptime(data_nascimento_str, '%d/%m/%Y').date()
            self.pesquisa.idade = self.pesquisa.calcular_idade(self.pesquisa.data_nascimento)
            
        except ValueError:
            messagebox.showerror("Erro", "Formato de data inválido. Use o formato DD/MM/AAAA.")
            return 

        self.pesquisa.genero = self.genero_var.get()
        if self.pesquisa.genero == "":
            messagebox.showerror("Erro", "Por favor, selecione um gênero.")
            return

        self.pesquisa.respostas = self.obter_respostas()

        # Salvar os dados da pesquisa
        self.pesquisa.salvar_respostas()

        # Exibir a janela de confirmação
        confirmacao = messagebox.askquestion("Confirmação", "Dados salvos com sucesso!\nDeseja adicionar mais dados?")
        if confirmacao == 'yes':
            self.limpar_campos()
        else:
            self.destroy()

    def limpar_campos(self):
        self.data_nascimento_entry.delete(0, tk.END)
        self.genero_var.set("Selecione seu gênero")
        for resposta_var in self.respostas_var:
            resposta_var.set({None})

if __name__ == "__main__":
    app = Aplicacao()
    app.mainloop()
