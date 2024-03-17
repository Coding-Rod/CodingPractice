import java.util.Scanner;

public class Arr7 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int arr[] = new int[10];
        int even_count = 0, odd_count = 0;
        System.out.println("Llenar el arreglo");
        for (int i = 0; i < arr.length; i++) {
            System.out.print((i+1)+". Digite un numero: ");
            arr[i] = input.nextInt();
            if (arr[i] % 2 == 0) even_count++;
        }

        int[] even = new int[even_count];
        int[] odd = new int[arr.length - even_count];

        even_count = 0;

        for (int i : arr) {
            if (i % 2 == 0){
                even[even_count] = i;
                even_count++;
            } else {
                odd[odd_count] = i;
                odd_count++;
            }
        }

        System.out.println("\nPares");
        for (int i : even) {
            System.out.println(i);
        }
        System.out.println("\nImpares");
        for (int i : odd) {
            System.out.println(i);
        }
    }    
}