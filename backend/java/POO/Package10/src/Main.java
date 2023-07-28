import java.util.ArrayList;
import java.util.Scanner;

import people.deporte.*;
import people.medicina.*;

public class Main {
    static ArrayList<Futbolista> jugadores = new ArrayList<Futbolista>();
    static Scanner input = new Scanner(System.in);
    static Entrenador _trainer;
    static Doctor _doctor;

    static int counter = 0;
    static String name;
    static int age;
    static String element1;
    static String element2;

    static int option = 0;
    static boolean more = true, exit = false;
    public static void main(String[] args) throws Exception {
        
        System.out.println("Registro de equipo:");
        do {
            System.out.println("\n----------------Menu----------------");
            System.out.println("1. Entrenador");
            System.out.println("2. Jugadores");
            System.out.println("3. Doctor");
            System.out.println("4. Exit");
            
            do {
                System.out.print(">> ");
                option = input.nextInt();
                if (option <1 || option > 4) {
                    System.err.println("Not listed");
                }
                
            } while (option < 1 || option > 4);

            switch (option) {
                case 1:
                    trainerMethod();
                    break;
                case 2:
                    playerMethod();
                    break;
                case 3:
                    doctorMethod();
                    break;
            
                default:
                    System.out.println("Shutting down...");
                    input.next();
                    break;
            }


        } while (!exit);     
    }
    
    public static void trainerMethod() {
        while (true) {
            do {
                System.out.println("1. Registrar");
                System.out.println("2. Mostrar caracteristicas de entrenador");
                System.out.println("3. Nueva estrategia");
                System.out.println("4. Viaje");
                System.out.println("5. Entrenamiento");
                System.out.println("6. Juego");
                System.out.println("7. Entrevista");
                System.out.println("8. Atras");
                option = input.nextInt();
            } while (option < 1 || option > 8);

            switch(option) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 8:
                    break;
            }

            //TODO: Register trainer     
            //TODO: toString();

            //TODO: new strategy
            //TODO: trip()
            //TODO: train()
            //TODO: game()

            //TODO: interview()
        }
    }
    
    public static void playerMethod() {
        while (true) {
            do {
                System.out.println("1. Registrar");
                System.out.println("2. Listar jugadores");
                System.out.println("3. Modificar dorsal");
                System.out.println("4. Modificar posicion");
                System.out.println("5. Viaje");
                System.out.println("6. Entrenamiento");
                System.out.println("7. Juego");
                System.out.println("8. Entrevista");
                System.out.println("9. Atras");
                option = input.nextInt();
            } while (option < 1 || option > 8);

            switch(option) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 8:
                    break;
            }
            //TODO: Menu

            //TODO: Register players
            //TODO: list players
            
            //TODO: resetDorsal()
            //TODO: resetPosition()
            
            //TODO: trip()
            //TODO: train()
            //TODO: game()

            //TODO: interview()
        }
    }
    
    public static void doctorMethod() {
        while (true) {
            do {
                System.out.println("1. Registrar");
                System.out.println("2. Listar jugadores");
                System.out.println("3. Modificar dorsal");
                System.out.println("4. Modificar posicion");
                System.out.println("5. Viaje");
                System.out.println("6. Entrenamiento");
                System.out.println("7. Juego");
                System.out.println("8. Entrevista");
                System.out.println("9. Atras");
                option = input.nextInt();
            } while (option < 1 || option > 8);

            switch(option) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 8:
                    break;
            }

        
        //TODO: Register doctor
        //TODO: toString();

        //TODO: cure()
        //TODO: interview()
        }
    }
        //#region Standby
        // !Registro de entrenador
        // System.out.println("\n----------------Entrenador----------------");
        // System.out.println("Nombre completo");
        // name = input.nextLine();
        // System.out.println("Edad");
        // age = input.nextInt();
        // System.out.println("Estrategia");
        // element1 = input.nextLine();
        // Entrenador entrenador = new Entrenador(name.split(" ")[0],
        // name.split(" ")[1],
        // age,
        // element1);
        
        // // !Registro de jugadores
        // while (more) {
        //     counter++;
        //     System.out.println("\n----------------Jugador "+counter+"----------------");
        //     System.out.println("Nombre completo");
        //     name = input.nextLine();
        //     System.out.println("Edad");
        //     age = input.nextInt();
        //     System.out.println("Dorsal");
        //     element1 = input.nextLine();
        //     System.out.println("Posicion");
        //     element2 = input.nextLine();
            
        //     jugadores.add(Futbolista(name.split(" ")[0],
        //     name.split(" ")[1],
        //     age,
        //     Integer.parseInt(element1),
        //     element2));
        // }
        //#endregion Standby
        
    
}
