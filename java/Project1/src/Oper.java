import java.util.Scanner;

public class Oper {
    private static Scanner scanner;

    public static void main(String[] args) {
        scanner = new Scanner(System.in);

        // Variables 
        float num1, num2;
        float sum,sub,div,mul,mod;

        // Scan
        System.out.println("Digite 2 numeros: ");
        num1 = scanner.nextFloat();
        num2 = scanner.nextFloat();

        // Operations
        sum = num1 + num2;
        sub = num1 - num2;
        div = num1 / num2;
        mul = num1 * num2;
        mod = num1 % num2;

        // Console out
        System.out.println(sum);
        System.out.println(sub);
        System.out.println(div);
        System.out.println(mul);
        System.out.println(mod);
    }
    
}