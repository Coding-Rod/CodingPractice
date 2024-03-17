import java.util.Scanner;

public class Arr8 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int[] arr = new int[10];
        int num;

        System.out.println("Llenar el arreglo");
        for (int i = 0; i < arr.length; i++) {
            System.out.print((i+1)+". Digite un numero: ");
            arr[i] = input.nextInt();
        }

        System.out.print("Ingrese el numero que desea buscar en el arreglo: ");
        num = input.nextInt();

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == num){
                System.out.println("El numero " + num + " se encuentra en la posicion "+i+1);
            }else if(i == arr.length - 1){
                System.err.println("404: Element not found");
            }
        }
    }
}