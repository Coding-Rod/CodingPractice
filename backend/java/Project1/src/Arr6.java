import java.util.Scanner;

public class Arr6 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int[] arr = new int[10];
        int num;

        for (int i = 0; i < arr.length; i++) {
            arr[i] = i*2;
        }

        System.out.print("Ingrese un numero: ");
        num = input.nextInt();

        for (int i = 0; i < arr.length; i++) {
            if(num>=arr[i] && num<=arr[i+1]) {
                arr[i+1] = num;
                break;
            }    
        }

        for (int i : arr) {
            System.out.println(i);
        }
    }    
}