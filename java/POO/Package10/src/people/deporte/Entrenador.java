package people.deporte;
import javax.swing.JOptionPane;

import people.Persona;

public class Entrenador extends Persona {
    private String estrategia;    
    
    public Entrenador(String name, String lastName, int age, String estrategia) {
        super(name, lastName, age);
        this.estrategia = estrategia;
    }


    public String getEstrategia() {
        return this.estrategia;
    }

    public void setEstrategia(String estrategia) {
        this.estrategia = estrategia;
    }

    public void viaje() {
        System.out.println("El entrenador "+super.getName()+", viaja con el equipo");
    }

    public void entrenamiento(String jugadores[]) {
        System.out.println("El entrenamiento se llevara a cabo con ls jugadores:");
        for (String jugador : jugadores) {
            System.out.println(jugador);
        }
    }

    public void partido(Futbolista jugadores[]) {
        System.out.println("Los jugadores seleccionados para el partido son:");
        for (Futbolista jugador : jugadores) {
            System.out.print(jugador.getName()+" "+jugador.getLastName());
            System.out.print(" con el dorsal "+jugador.getDorsal());
            System.out.println(" en la posicion de "+jugador.getPosicion());
        }
        System.out.println("\nLa estrategia utilizada sera:\n"+this.estrategia);
    }

    public void planificacionEntrenamiento(Futbolista jugadores[], String fecha, int hora) {
        String title = "Notificacion";
        String message = "El entrenamiento se llevara a cabo el dia "+fecha+" a las "+hora+" horas, los jugadores que se tomarán en cuena son:";

        for (Futbolista futbolista : jugadores) {
            message += futbolista.getName()+", ";
        }
        message = message.substring(0, message.length()-1)+". ";
        JOptionPane.showMessageDialog(null, message, title, 1);
    }

    @Override
    public void entrevista() {
        System.out.println("Se esta entrevistando a "+super.getName()+" entrenador del equipo.");
    }
}