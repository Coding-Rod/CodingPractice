package mathematics;

public class Operation {

    public int sumMethod(int num1, int num2) {
        return num1+num2;
    }
    public int subMethod(int num1, int num2) {
        return num1-num2;
    }
    public int mulMethod(int num1, int num2) {
        return num1*num2;
    }
    public int divMethod(int num1, int num2) {
        return num1/num2;
    }
    public void showResults(int sum,int sub,int mul,int div) {
        System.out.println("La suma es: "+sum);
        System.out.println("La resta es: "+sub);
        System.out.println("La multiplicacion es: "+mul);
        System.out.println("La division es: "+div);
        
    }
}