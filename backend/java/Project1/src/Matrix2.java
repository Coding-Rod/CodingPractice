import java.util.Scanner;

public class Matrix2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int row, col, aux;

        System.out.println("Ingrese el numero de filas y columnas");
        row = input.nextInt();
        col = row;
        
        int [][] matrix = new int[row][col];
        
        System.out.println("Original\n");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                matrix[j][i] = j;
                System.out.print(j+" ");
            }
            System.out.println(' ');
        }
        
        System.out.println("\nTranspuesta\n");

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                aux = matrix[i][j]; // aux = a
                matrix[i][j] = matrix[j][i]; // a = b
                matrix[j][i] = aux; // b = aux
            }
        }

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print(matrix[i][j]+" ");
            }
            System.out.println(' ');
        }
    }
}