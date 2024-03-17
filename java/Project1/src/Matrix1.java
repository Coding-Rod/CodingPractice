import java.util.Scanner;

import javax.swing.JOptionPane;

public class Matrix1 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int matrix[][], row_length, column_length;

        row_length = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el numero de filas"));
        column_length = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el numero de columnas"));

        matrix = new int[row_length][column_length];

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print("Ingrese el valor ("+(i+1)+","+(j+1)+"): ");
                matrix[i][j] = input.nextInt();
            }
        }

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print(matrix[i][j]+"  ");
            }
            System.out.println(' ');
        }
    }
}