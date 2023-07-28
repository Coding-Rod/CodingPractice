import live.Planta;
import live.animal.*;

public class Main {
    public static void main(String[] args) throws Exception {
        Planta plant = new Planta();
        Carnivoro animal1 = new Carnivoro();
        Herbivoro animal2 = new Herbivoro();

        plant.alimentarse();
        animal1.alimentarse();
        animal2.alimentarse();
    }
}
