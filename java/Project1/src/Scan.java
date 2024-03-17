import java.util.Scanner;

public class Scan {
    private static Scanner entrada;

    public static void main(String[] args){
        entrada = new Scanner(System.in);
        char letter;

        System.out.println("Digite un numero: ");
        letter = entrada.next().charAt(0);

        System.out.println("El caracter es: " + letter);
    }
}
