import java.util.Scanner;

import javax.swing.JOptionPane;

public class Main{
    public static void main(String[] args) {
        //#region previous
        // System.out.println("Hello, world!");
        // int n = 0;
        
        // System.out.println("n value: "+n);
        // n +=2; // n = i+2
        // System.out.println("n value: "+n);
        
        // n++;  // n = i+1 || n +=1
        // System.out.println("n value: "+n);
        
        // for (int j = 0; j < 5; j++) {
        //     System.out.println("Value: "+j);
        // }
        
        // float x = 0;
        // double y = 0; // bigger float
        // String s = "Bryson"; // double quotes
        // char c = 'B';
        
        // (1,2,3) 
        // [1,2,3]
        // set(1,2,3)
        // {1:'one',2:'two',3:'three'}
        
        // Array       // Static = size cannot be changed
        // ArrayList   // Dynamic = size can be changed
        
        //#endregion previous
        //#region Array
        // int [] array = {1,2,3,4,5,6,7,8};
        
        // for (int i : array) {
        //     System.out.println(i);
        // }
        
        // System.out.println(' ');
        
        // for (int i = 0; i < array.length; i++) {
        //     System.out.println(array[i]);
        // }

        //#endregion Array
        //#region while vs do while
        // int n = 1;
        
        // do {
        //     System.out.println("Hello do while");
        // } while (n == 0);
        
        // System.out.println("Hello while");
        // while (n == 0) {
        //     System.out.println("Hello while");
        // }
        //#endregion while vs do while
        //#region Input
        // Scanner input = new Scanner(System.in);
        
        // System.out.print("Write a number: ");
        
        // int n = input.nextInt();
        // float x = input.nextFloat();
        // String s = input.nextLine();
        // char c = s.charAt(0);
        
        // System.out.println("The number of is "+n);
        //#endregion Input
        //#region JOptionPane
        
        int n;
        
        n = Integer.parseInt(JOptionPane.showInputDialog("Write a number"));
        
        JOptionPane.showMessageDialog(null, "The number is "+n, "Number", 1);
        //#endregion JOptionPane
    }
}