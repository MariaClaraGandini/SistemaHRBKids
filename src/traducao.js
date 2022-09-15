@Traducao()

 
 @author Willian Keller
 
 @var d = Definições (Define os padrões da tradução)
 @var a = Array (Array em lista do conteúdo para tradução)
 @var c = Classe (Classe padrão do conteúdo à ser traduzido)
 @var n = Nome do Atributo (Recebe o valor primário do do atributo "name")
 @var o = Objeto (Definições de entrada do objeto "o* - 1/2/3")
 @var g = GetClass (Recupera as classes para a substituição "getElementsByClassName")
 @var p = Propriedade (busca todos os seletores de estilo)
 @var t = Texto Inline (captura o texto inline do estilo)
 
 @returns {Traducao}
/
Tradutor = function (array) {

    /*
     Definições globais
     
     @var d
     @type array
    /
    var d = {
        /*
         Entrada do array
        /
        a: [array],
        /*
         Classe de identificaço
        /
        c: "tdr",
        /*
         Ponto de substituição
        /
        s: "%"
    };

    /*
     Função responsável por fazer a comparação e 
     substituição do conteúdo relativo
     @param array o
     @param int i
     @param array g
     @returns void
    /
    compara = function (o, i, g) {

        /*
         Idioma padrão
         @type @arr;g
         @call;getAttribute
         @arr;g
        /
        var h = g[i].getAttribute("data-tdr");

        /*
         Verifica se existe um idioma padrão definido
        /
        if (!g[i].hasAttribute("data-tdr")) {

            g[i].setAttribute("data-tdr", g[i].innerHTML);

            /*
             Recebe o termo padrão atual
            /
            h = g[i].innerHTML;
        }

        /*
         Laço para identificar o parâmetro e o valor da tradução
         @type @arr;o
        /
        for (var p in o) {

            /*
             @var r
             @type RegExp|RegExp
            /
            var r = new RegExp(d.s, "g"),
                    /*
                     @var w
                     @type @pro;length|Array|
                     @exp;p
                     @call;match|
                     @exp;p
                     @call;replace
                    /
                    w = (p.match(new RegExp(d.s, "g")) || []).length,
                    /*
                     @var k
                     @type @arr;o|
                     @exp;Tradutor
                     @pro;compara
                     @pro;q
                    /
                    k = o[p];

            for (t = 0; t < w; t++) {

                /*
                 @var y
                 @type @exp;p
                 @call;indexOf
                /
                var y = p.indexOf(d.s),
                        /*
                         Retorna a palavra que será substituída pela expressão
                         @var u
                         @type @exp;conteudo
                         @call;slice
                        /
                        u = palavra(h, y),
                        /*
                         Substitui a expressão regular pela palavra na string base
                         @var s
                         @type @exp;p
                         @call;replace
                        /
                        s = p.replace(d.s, u),
                        /*
                         Suvstitui a expressão regular pela palavra na string de tradução
                         @var q
                         @type @exp;k
                         @call;replace
                        /
                        q = k.replace(d.s, u),
                        /*
                         Instancia a nova variável da string base
                         @var p
                         @type @arr;o|
                         @exp;Tradutor
                         @pro;compara
                         @pro;s
                        /
                        p = s,
                        /*
                         Instancia a nova variável da string de tradução
                         @var r
                         @type @arr;o|
                         @exp;Tradutor
                         @pro;compara
                         @pro;q
                        /
                        k = q;
            }

            /*
             Substitui para a expressão regular possibilitar a comparação
             @var w
             @type Array|
             @pro;length|
             @exp;p
             @call;match|
             @exp;p
             @call;replace
            /
            w = p.replace(r, "(.*)"),
                    /*
                     Transforma a string em uma expressão regular para a comparação
                     @var r
                     @type RegExp|RegExp
                    /
                    r = new RegExp(w, "g");

            /*
             Comparação das variáveis
            /
            if (r.test(h)) {

                /*
                 Substituição do conteúdo
                /
                g[i].innerHTML = k;
            }
        }
    };

    /*
     Função resposável por fazer a contagem e
     referência dos itens de tradução
     @param {type} i
     @param {type} g
     @returns {undefined}
    /
    classes = function (i, g) {

        /*
         Contagem das traduções associadas
        /
        for (j = 0; j < d.a.length; j++) {

            /*
             Definindo a entrada dos métodos
             @type array 
             @exp;d
             @arr;a
            /
            var o = d.a[j];

            /*
             Função responsável por fazer a comparação e 
             substituição do conteúdo relativo
             @returns void
            /
            compara(o, i, g);
        }
    };

    /*
     Função reponsável por definir a tradução do conteúdo
     Identifica as classes
     Substitui pelo conteúdo traduzido
     
     @returns void
    /
    traducao = function () {

        /*
         Recupera as classes para a substituição
         @var g
        /
        g = document.getElementsByClassName(d.c);

        /*
         Contagem das classes recuperadas
        /
        for (i = 0; i < g.length; i++) {

            /*
             
             @param int i
             @param array g
             @returns void
            /
            classes(i, g);
        }
    };

    palavra = function (conteudo, posicao) {

        /*
         Realiza as conversões dos tipos
         @type @exp;Tradutor
         @pro;palavra
         @pro;conteudo
        /
        var conteudo = (conteudo),
                /*
                 Posição da palavra (Resgatada usando IndexOf)
                 @type @exp;Tradutor
                 @pro;palavra
                 @pro;posicao|Number
                /
                posicao = (posicao) >>> 0;

        /*
         Procura o início da palavra
         @type @exp;conteudo
         @call;slice
         @call;search
        /
        var inicio = conteudo.slice(0, posicao + 1).search(/\S+$/),
                /*
                 Procura o fim da palavra
                 @type @exp;conteudo
                 @call;slice
                 @call;search
                /
                final = conteudo.slice(posicao).search(/\s/);

        // A última palavra na chave recebe um tratamento especial.
        if (final < 0) {

            /*
             Retorna o valor inteiro
            /
            return conteudo.slice(inicio);
        }

        /*
         Retorna a palavra, utilizando os limites localizados para extraí-la a partir da chave.
        /
        return conteudo.slice(inicio, final + posicao);
    };

    /*
     Inicia o sistema de tradução
    /
    traducao();
};