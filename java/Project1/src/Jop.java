import javax.swing.JOptionPane;

public class Jop {
    public static void main(String[] args) {
        // Variables
        String cadena;
        int entero;
        char letra;
        double decimal;

        // Get values
        cadena = JOptionPane.showInputDialog("Digite una cadena");
        entero = Integer.parseInt(JOptionPane.showInputDialog("Digite un entero"));
        letra = JOptionPane.showInputDialog("Digite un caracter").charAt(0);
        decimal = Double.parseDouble(JOptionPane.showInputDialog("Digite im decimal"));

        // Show messages
        JOptionPane.showMessageDialog(null, "La cadena es: "+cadena);
        JOptionPane.showMessageDialog(null, "El entero es: "+entero);
        JOptionPane.showMessageDialog(null, "El caracter es: "+letra);
        JOptionPane.showMessageDialog(null, "El decimal es: "+decimal);

    }
}
