interface queueInterface<Type> {
   enqueue(dataItem: Type): void; // adiciona um elemento no final da fila
   dequeue(): Type | undefined; // remove um elemento do inicio da fila
   isEmpty(): boolean; // checa se a fila está vazia
   count(): number; // conta os itens da fila
   printQueue(): void; // mostra a fila
   peek(): Type | undefined; // mostra o q tem na fila, sem remover 
   contains(dataItem: Type): boolean; // mostra se tem um determinado elemento dentro da fila
   clear(): void; // limpa a fila toda, apaga tudo da fila
}
 
export class Queue<Type> implements queueInterface<Type> {
 
   private QueueData: Array<Type> = [];
 
   constructor() { }
 
   isEmpty(): boolean {
      let result = this.QueueData.length <= 0;
      return result;
   }
 
   enqueue(dataItem: Type): void {
      this.QueueData.push(dataItem);
   }
 
   dequeue(): Type | undefined {
      if (this.isEmpty()) {
         console.log("A fila está vazia");
         return;
      } else {
         var element = this.QueueData.shift();
         return element;
      }
   }
 
   count(): number {
      let len = this.QueueData.length;
      return len;
   }
 
   printQueue(): void {
      for (let i = 0; i < this.QueueData.length; i++) {
         console.log(this.QueueData[i]);
      }
   }
 
   peek(): Type | undefined {
      if (this.isEmpty()) {
         console.log("A fila está vazia");
         return;
      } else {
         var element = this.QueueData[0];
         return element;
      }
   }
 
   contains(dataItem: Type): boolean {
      if (this.QueueData.includes(dataItem)) {
         return true;
      } else {
         return false;
      }
   }
 
   clear(): void {
      this.QueueData.length = 0;
   }
 
}
