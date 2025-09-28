function moveon(){
        //exibe uma caixa de diálogo modal para fazer uma pergunta ao usuário
        let answer = confirm ("Quer direcionar para o instagram?");
        //se ele clilou no botão "ok", faz o navegador carregar uma nova página
        if(answer) window.location = "http://instagram.com";
    }
    //Executa a função definida acima por 3 segundos(3000 milesegundos) a partir de agora 
    //setTimeout(moveon,3000);


//exibe uma menssagem em uma seção de saída de depuração especial do documento.
//se o documento não contém essa seção, cria uma.    
function debug(msg){
        //Localiza a seção de depuração do documento,examinando os atributos de 
        //identificação HTML
        let log = document.getElementById("debuglog");
        //se não existe elemento algun com a identificação "debuglog", cria um.
        if(!log){
            log = document.createElement("div");
            log.id = "debuglog";

            log.innerHTML = "<h1>debuglog</h1>"; //define o conteúdo inicial
            document.body.appendChild(log); //Adiciona-o no final do documento
        }

        let pre = document.createElement("pre");
        let text = document.createTextNode(msg);
        pre.appendChild(text);
        log.appendChild(pre);
    }

    debug("Primeira mensagem de debug");
    debug("Outra linha de log");

    setTimeout(function() {alert("criei um alerta, e sera exibido depois de 2 segundos");},2000);
