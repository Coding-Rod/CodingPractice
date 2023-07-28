import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import javax.swing.JOptionPane;

import java.io.FileNotFoundException;

public class TryExceptions {

    public static void readFile() throws IOException {
        String line;
        
        File file = new File("/home/rodri/Documents/Java/Project2/src/text.txt");
        FileReader fr = new FileReader(file);
        BufferedReader br = new BufferedReader(fr);

        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }

        br.close();
    }

    public static void readFile2() throws IOException {
        try {
            readFile();
        } catch (FileNotFoundException e) { //It is posible just use "Exception"
            JOptionPane.showMessageDialog(null, "Archivo no encontrado");
        } catch (IOException e){
            JOptionPane.showMessageDialog(null, "Ha ocurrido una excepcion verificada");
        }

        System.out.println("Programa terminado");
    }
    public static void main(String[] args) throws IOException {
        readFile2();
    }
}