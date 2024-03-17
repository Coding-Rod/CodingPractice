import java.util.Scanner;

import javax.lang.model.type.ArrayType;

public class Arr4 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int array[] = new int[10];
        boolean grow = false, descent = false;

        System.out.println("Llenar el arreglo");
        for (int i = 0; i < array.length; i++) {
            System.out.print((i+1)+". Digite un numero: ");
            array[i] = input.nextInt();
        }

        for (int i = 0; i < array.length-1; i++) {
            if (array[i] < array[i+1]) {
                grow = true;
            }
            if (array[i] > array[i+1]) {
                descent = true;
            }
        }

        if (grow && !descent) {
            System.out.println("Creciente");
        } else if (!grow && descent) {
            System.out.println("Decreciente");
        } else if (grow && descent) {
            System.out.println("Desordenado");
        } else{
            System.out.println("Iguales");
        }
    }
}