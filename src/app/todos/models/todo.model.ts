
    export class Todo {

        public id: number;
        public completado: boolean;
        public texto: string;

        constructor( texto: string ) {
            this.texto = texto;

            this.id = Math.random() * 10;
            this.completado = false;
         }

    }