import javax.swing.JOptionPane;

public class Main {
    public static void main(String[] args) throws Exception {
        Cuadrilatero c1;
        float lado1,lado2;

        lado1 = Float.parseFloat(JOptionPane.showInputDialog("Digite el ancho"));
        lado2 = Float.parseFloat(JOptionPane.showInputDialog("Digite el alto"));

        if (lado1 == lado2) {
            c1 = new Cuadrilatero(lado1);
        } else {
            c1 = new Cuadrilatero(lado1,lado2);
        }
        System.out.println("El perimetro es: " + c1.getPerimeter());
        System.out.println("El area es: " + c1.getArea());
    }
}
