package project1.src;
import java.util.Scanner;

public class App {
    private static Scanner input;

    public static void main(String[] args) throws Exception {
        input = new Scanner(System.in);
        float note1,note2,note3, sum;

        // Save notes
        System.out.println("Digite 3 calificaciones:");;
        note1 = input.nextFloat();
        note2 = input.nextFloat();
        note3 = input.nextFloat();

        // Operation
        sum = note1 + note2 + note3;

        // Out
        System.out.println("La suma es: " + sum);
    }
}
