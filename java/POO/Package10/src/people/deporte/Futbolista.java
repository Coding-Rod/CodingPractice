package people.deporte;
import people.Persona;

public class Futbolista extends Persona {
    private int dorsal;
    private String posicion;

    public Futbolista(String name, String lastName, int age, int dorsal, String posicion) {
        super(name, lastName, age);
        this.dorsal = dorsal;
        this.posicion = posicion;
    }

    public int getDorsal() {
        return this.dorsal;
    }

    public void setDorsal(int dorsal) {
        this.dorsal = dorsal;
    }

    public String getPosicion() {
        return this.posicion;
    }

    public void setPosicion(String posicion) {
        this.posicion = posicion;
    }

    public void viaje(boolean participate) {
        System.out.println("El jugador "+super.getName()+(participate?"":"no ")+"participará del viaje del equipo.");
    }

    public void entrenamiento(boolean participate) {
        System.out.println("El jugador "+super.getName()+(participate?"":"no ")+"entrenará con el equipo en el proximo entrenamiento");
    }

    public void partido(boolean participate) {
        System.out.println("El jugador "+super.getName()+(participate?"":"no ")+"jugará el proximo partido");
    }

    @Override    
    public void entrevista() {
        System.out.println("Se esta entrevistando al jugador"+super.getName()+" con el dorsal"+this.dorsal);
    }
}