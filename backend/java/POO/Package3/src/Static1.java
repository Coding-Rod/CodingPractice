public class Static1 {
    private static String phrase = "First phrase"; // With static all objects attributes will change

    public static int sum(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        Static1 obj1 = new Static1();
        Static1 obj2 = new Static1();

        Static1.phrase = "Second phrase";

        System.out.println(Static1.phrase);
        System.out.println(Static1.phrase);
        System.out.println("La suma es: " + Static1.sum(2,1));
    }
}
