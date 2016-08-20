 // Carrega as bibliotecas Serial e Arduino
  import processing.serial.*;
  import cc.arduino.*;

  Arduino arduino;

  //Variavéis
  int vs = 0;  //O que faz medir a temperatura do LM35
  int pinoSensor = 1; //Pino Sensor
  int gnd = 2; //Pino Preto
  int valorLido = 0; //Leitura da temperatura e guarda a temperatura no Pino Sensor
  float temperatura = 0; //Numero decimal da temperatura 
  

 void setup() {
 size(500,300); // Tamanho da janela

//Configuração e Função dos Pinos
 Serial.begin(9600); //Inicia uma comunicação Serial com Baud Rate de 9600
 pinMode(vs,OUTPUT); // Define o Pino 2 de saída
 pinMode(gnd,OUTPUT); // Define o pino 3 de saída 
 digitalWrite(vs,HIGH); // Acende o LED verde
 digitalWrite(gnd,LOW); // Apaga o LED vermelho 
  
}

 void loop() {
  // put your main code here, to run repeatedly:
  
 valorLido = analogRead(pinoSensor); // Leitura do Pino Sensor 
 temperatura = (valorLido *0.00488); // Valor Binário 
 temperatura = temperatura * 100; //Transformando o valorLido em Celcius (ou seja, temperatura * 100 = °C)

 // Aparece a Performace
 Serial.print("Temperatura atual: "); // Aparecer a Temperatura atual
 Serial.print(temperatura); // Aparecer a Temperatura 
 Serial.println(" ºC"); // Aparecer a Temperatura em Celcius 
 delay(1000);  //Aguarda 1000 milissegundos

}

