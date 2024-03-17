import javax.swing.JOptionPane;

public class Ciclos {
    // Codigo, cantidad, precio
    // Se pude 5 facturas:
    // Cantidad total en litros del articulo 1
    // Cuantas facturas valen más de 600

    public static void main(String[] args) {
        int codigo, litros;
        float precioLitro, importeFactura, total=0;
        int art1 = 0, m600 = 0;

        for (int i = 0; i < 6; i++) {
            codigo = Integer.parseInt(JOptionPane.showInputDialog("Digite el codigo del "+i+"° articulo"));
            litros = Integer.parseInt(JOptionPane.showInputDialog("Digite el volumen del "+i+"° articulo en litros"));
            precioLitro = Integer.parseInt(JOptionPane.showInputDialog("Digite el precio del "+i+"° articulo"));

            importeFactura = (float) litros * precioLitro;
            total += importeFactura;

            if (codigo == 1) 
                art1 += litros;
            if (importeFactura > 600) 
                m600++;
        }
        String message = "\nFacturacion total"+total
                         +"\nCantidad de litros vendidos del articulo 1: "+art1
                         +"\nCantidad de facturas mayores a $600: "+m600;
        JOptionPane.showMessageDialog(null, message, "Resumen de ventas", 1);
    }
}