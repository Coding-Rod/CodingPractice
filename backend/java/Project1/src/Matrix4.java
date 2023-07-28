import java.util.Scanner;

public class Matrix4 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Ingrese el tamaño de la matrix");
        int n = input.nextInt();
        int [][] matrix = new int[n][n];

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix.length; j++) {
                if (i == 0 || j == 0 || i==n-1 || j==n-1) {
                    matrix[i][j] = 1;
                }else{
                    matrix[i][j] = 0;
                }
            }
        }
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix.length; j++) {
                System.out.print(matrix[i][j]+" ");
            }
            System.out.println(' ');
        }
    }
}