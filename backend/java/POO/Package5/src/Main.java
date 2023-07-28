import javax.swing.JOptionPane;

public class Main {
    public static int bestScore(Athlete v[]) {
        float bestTime = v[0].getTime();
        int index = 0;
        for (int i = 0; i < v.length; i++) {
            if (v[i].getTime() < bestTime){
                bestTime = v[i].getTime();
                index = i;
            }
        }
        return index;
    }
    public static void main(String[] args) throws Exception {
        int n;
        int number;
        String name;
        float time;
        n = Integer.parseInt(JOptionPane.showInputDialog("Ingrese la cantidad de atletas"));

        Athlete[] athletes = new Athlete[n];

        for (int i = 0; i < athletes.length; i++) {
            number = Integer.parseInt(JOptionPane.showInputDialog("Ingrese el numero del atleta"));
            name = JOptionPane.showInputDialog("Ingrese el nombre del atleta");
            time = Float.parseFloat(JOptionPane.showInputDialog("Ingrese el tiempo del atleta"));
            athletes[i] = new Athlete(number,name,time);
        }

        int index = bestScore(athletes);
        System.out.println("El ganador es el athleta numero ["+ athletes[index].getNumber()+
                            "], el nombre del atleta es "+athletes[index].getName()+
                            ", y el tiempo del atleta es "+athletes[index].getTime());
    }
}
