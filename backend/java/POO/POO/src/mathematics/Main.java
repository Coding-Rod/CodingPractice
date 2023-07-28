package mathematics;
import javax.swing.*;
public class Main {
    
    public static void main(String[] args) {
        Operation op = new Operation();
        int num1 = Integer.parseInt(JOptionPane.showInputDialog("Ingrese un numero"));
        int num2 = Integer.parseInt(JOptionPane.showInputDialog("Ingrese otro numero"));

        int sum = op.sumMethod(num1, num2);
        int sub = op.subMethod(num1, num2);
        int mul = op.mulMethod(num1, num2);
        int div = op.divMethod(num1, num2);

        op.showResults(sum, sub, mul, div);
    }
}
