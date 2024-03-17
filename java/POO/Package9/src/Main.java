import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    static ArrayList<Poligono> poligono = new ArrayList<Poligono>();
    static Scanner input = new Scanner(System.in);
    public static void main(String[] args) throws Exception {
        llenarPoligono();
        showResults();
    }

    public static void llenarPoligono() {
        char res;
        int option;
        do {
            do {
                System.out.println("Digite que poligono");
                System.out.println("1. Triangulo");
                System.out.println("2. Rectangulo");
                System.out.println("Opcion:");
                option = input.nextInt();
            } while (option<1 || option>2);

            switch (option) {
                case 1:
                    llenarTriangulo();
                    break;
                case 2:
                    llenarRectangulo();
                    break;
            }

            System.out.println("\nDesea introducir otro poligono?(Y/n)");
            res = input.next().charAt(0);
            System.out.println("");
        } while (res == 'Y' || res == 'y');
    }

    public static void llenarTriangulo() {
        double lado1;
        double lado2;
        double lado3;

        System.out.println("Digite el lado 1 del triangulo");
        lado1 = input.nextDouble();
        System.out.println("Digite el lado 2 del triangulo");
        lado2 = input.nextDouble();
        System.out.println("Digite el lado 3 del triangulo");
        lado3 = input.nextDouble();

        Triangulo triangulo = new Triangulo(lado1, lado2, lado3);
        poligono.add(triangulo);
    }

    public static void llenarRectangulo() {
        double lado1;
        double lado2;

        System.out.println("Digite el lado 1 del rectangulo");
        lado1 = input.nextDouble();
        System.out.println("Digite el lado 2 del rectangulo");
        lado2 = input.nextDouble();

        Rectangulo rectangulo = new Rectangulo(lado1, lado2);
        poligono.add(rectangulo);
    }

    public static void showResults() {
        for (Poligono poli : poligono) {
            System.out.println("Datos:");
            System.out.println(poli.toString());
            System.out.println("Area:");
            System.out.println(poli.area());
        }
    }
}
