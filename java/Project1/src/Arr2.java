import java.util.Scanner;

public class Arr2 {

    private static Scanner input;

    public static void main(String[] args) {
        input = new Scanner(System.in);
        float[] numbers = new float[5];


        System.out.println("Guardando los datos en el arreglo");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print((i+1)+". Digite un numero: ");
            numbers[numbers.length-i-1] = input.nextFloat();
        }

        System.out.println("Imprimiendo en pantalla");
        for (float i : numbers) {
            System.out.println(i);
        }
    }
}